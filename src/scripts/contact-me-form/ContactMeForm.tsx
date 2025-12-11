import { useState, type FormEvent, useEffect, useRef } from "react";
import "./ContactForm.css";

declare global {
  interface Window {
    turnstile: {
      ready: (callback: () => void) => void;
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
      getResponse: (widgetId: string) => string;
    };
  }
}

export function ContactForm() {
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

  useEffect(() => {
    if (window.turnstile) {
      window.turnstile.ready(() => {
        if (turnstileRef.current && !widgetIdRef.current) {
          try {
            widgetIdRef.current = window.turnstile.render(
              turnstileRef.current,
              {
                sitekey: "0x4AAAA_YOUR_SITE_KEY_HERE",

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
                  setErrorMessage("CAPTCHA expired. Please complete it again.");
                },
              }
            );

            console.log("Turnstile widget initialized:", widgetIdRef.current);
          } catch (error) {
            console.error("Failed to initialize Turnstile:", error);
            setErrorMessage("Failed to load CAPTCHA. Please refresh the page.");
          }
        }
      });
    }
  }, []);

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
      const response = await fetch("https://api.nicholascerisano.com/contact", {
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
    <div className="ContactForm">
      <h2>Send Me a Message</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="honeypot"
          value={formData.honeypot}
          onChange={handleChange}
          style={{ display: "none" }}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={status === "sending"}
            maxLength={100}
            placeholder="Your name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={status === "sending"}
            placeholder="your.email@example.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            disabled={status === "sending"}
            maxLength={200}
            placeholder="What's this about?"
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            disabled={status === "sending"}
            maxLength={2000}
            placeholder="Your message..."
          />
        </div>

        <div className="form-group">
          <div ref={turnstileRef} id="turnstile-widget"></div>
        </div>

        <button
          type="submit"
          disabled={status === "sending" || !turnstileToken}
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>

        {status === "success" && (
          <div className="status-message success">
            ✓ Message sent successfully! I'll get back to you soon.
          </div>
        )}

        {status === "error" && (
          <div className="status-message error">✗ {errorMessage}</div>
        )}
      </form>
    </div>
  );
}
