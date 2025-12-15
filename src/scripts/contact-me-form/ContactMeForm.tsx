import { useState, type FormEvent, useEffect, useRef } from "react";
import "./ContactMeForm.css";

declare global {
  interface Window {
    turnstile: {
      render: (
        container: string | HTMLElement,
        options: {
          sitekey: string;
          callback: (token: string) => void;
          "error-callback"?: (errorCode: string) => void;
          "expired-callback"?: () => void;
          theme?: "light" | "dark" | "auto";
          size?: "normal" | "compact" | "flexible";
        }
      ) => string;
      reset: (widgetId: string) => void;
      remove: (widgetId: string) => void;
    };
  }
}

export function ContactMeForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    honeypot: "",
  });

  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [turnstileToken, setTurnstileToken] = useState<string>("");
  const turnstileRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string>("");

  // Environment variables
  const SITE_KEY =
    import.meta.env.VITE_TURNSTILE_SITE_KEY || "1x00000000000000000000AA";
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

  /**
   * Initialize Turnstile widget
   * Uses retry logic since we're using async/defer in script tag
   */
  useEffect(() => {
    const initTurnstile = () => {
      if (window.turnstile && turnstileRef.current && !widgetIdRef.current) {
        try {
          widgetIdRef.current = window.turnstile.render(turnstileRef.current, {
            sitekey: SITE_KEY,
            theme: "auto",
            size: "normal",
            callback: (token: string) => {
              console.log("Turnstile challenge completed");
              setTurnstileToken(token);
            },
            "error-callback": (errorCode: string) => {
              console.error("Turnstile error:", errorCode);
              setErrorMessage(
                "CAPTCHA error occurred. Please refresh the page."
              );
            },
            "expired-callback": () => {
              console.warn("Turnstile token expired");
              setTurnstileToken("");
            },
          });

          console.log("Turnstile widget initialized:", widgetIdRef.current);
          return true;
        } catch (error) {
          console.error("Failed to initialize Turnstile:", error);
          return false;
        }
      }
      return false;
    };

    // Try to initialize immediately
    if (initTurnstile()) {
      return;
    }

    // If not ready, try again with intervals (handles async script loading)
    let attempts = 0;
    const maxAttempts = 20; // Try for 2 seconds

    const interval = setInterval(() => {
      attempts++;

      if (initTurnstile() || attempts >= maxAttempts) {
        clearInterval(interval);

        if (attempts >= maxAttempts && !widgetIdRef.current) {
          console.error("Turnstile failed to load after max attempts");
          setErrorMessage("Failed to load CAPTCHA. Please refresh the page.");
        }
      }
    }, 100);

    return () => clearInterval(interval);
  }, [SITE_KEY]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Honeypot check - silent fail if bot detected
    if (formData.honeypot) {
      console.log("Bot detected via honeypot");
      return;
    }

    // Verify Turnstile token exists
    if (!turnstileToken) {
      setErrorMessage("Please complete the CAPTCHA verification");
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          turnstileToken,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Failed to send message");
      }

      // Success!
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        honeypot: "",
      });

      // Reset Turnstile widget for next submission
      if (window.turnstile && widgetIdRef.current) {
        window.turnstile.reset(widgetIdRef.current);
      }
      setTurnstileToken("");

      // Auto-hide success message after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Failed to send message. Please try again or contact me via LinkedIn."
      );

      // Reset Turnstile on error so user can try again
      if (window.turnstile && widgetIdRef.current) {
        window.turnstile.reset(widgetIdRef.current);
      }
      setTurnstileToken("");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="contact-form-container">
      <h2 className="contact-form-title">Send Me a Message</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        {/* Honeypot field - hidden from users, catches bots */}
        <input
          type="text"
          name="honeypot"
          value={formData.honeypot}
          onChange={handleChange}
          className="contact-form-honeypot"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        <div className="contact-form-group">
          <label htmlFor="contact-name" className="contact-form-label">
            Name
          </label>
          <input
            type="text"
            id="contact-name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="contact-form-input"
            required
            disabled={status === "sending"}
            maxLength={100}
            placeholder="Your name"
          />
        </div>

        <div className="contact-form-group">
          <label htmlFor="contact-email" className="contact-form-label">
            Email
          </label>
          <input
            type="email"
            id="contact-email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="contact-form-input"
            required
            disabled={status === "sending"}
            placeholder="your.email@example.com"
          />
        </div>

        <div className="contact-form-group">
          <label htmlFor="contact-subject" className="contact-form-label">
            Subject
          </label>
          <input
            type="text"
            id="contact-subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="contact-form-input"
            required
            disabled={status === "sending"}
            maxLength={200}
            placeholder="What's this about?"
          />
        </div>

        <div className="contact-form-group">
          <label htmlFor="contact-message" className="contact-form-label">
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="contact-form-textarea"
            required
            disabled={status === "sending"}
            maxLength={2000}
            placeholder="Your message..."
          />
        </div>

        <button
          type="submit"
          className="contact-form-submit"
          disabled={status === "sending" || !turnstileToken}
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>

        {status === "success" && (
          <div className="contact-form-status contact-form-status-success">
            ✓ Message sent successfully! I'll get back to you soon.
          </div>
        )}

        {status === "error" && (
          <div className="contact-form-status contact-form-status-error">
            ✗ {errorMessage}
          </div>
        )}

        {/* Turnstile CAPTCHA widget */}
        <div className="contact-form-group">
          <div ref={turnstileRef} className="contact-form-turnstile"></div>
        </div>
      </form>
    </div>
  );
}
