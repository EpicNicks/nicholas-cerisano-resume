import "./NavBar.css";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useTheme } from "../theme/ThemeContext";

interface IProps {
  onNavigate: (sectionId: string) => void;
}

interface NavButtonConfig {
  text: string;
  /** Label on phones, where the full labels don't fit across the bar. */
  shortText: string;
  sectionId: string;
}

const navButtons: NavButtonConfig[] = [
  { text: "Home", shortText: "Home", sectionId: "home" },
  { text: "My Projects", shortText: "Projects", sectionId: "projects" },
  { text: "Resume", shortText: "Resume", sectionId: "resume" },
  { text: "About Me", shortText: "About", sectionId: "about" },
  { text: "Contact Me", shortText: "Contact", sectionId: "contact-form" },
];

// Browsers without a scrollend event treat a clicked scroll as finished once scrolling pauses this long.
const SETTLE_MS = 150;
const hasScrollEnd = "onscrollend" in window;

// The section crossing the middle of the viewport, or the last section once the page is scrolled
// to the bottom (the contact form is too short to ever reach the middle).
function sectionInView(): string {
  const doc = document.documentElement;
  if (window.scrollY + window.innerHeight >= doc.scrollHeight - 2) {
    return navButtons[navButtons.length - 1].sectionId;
  }
  const middle = window.innerHeight / 2;
  let current = navButtons[0].sectionId;
  for (const { sectionId } of navButtons) {
    const el = document.getElementById(sectionId);
    if (el && el.getBoundingClientRect().top <= middle) current = sectionId;
  }
  return current;
}

export function NavBar({ onNavigate }: IProps) {
  const [activeSection, setActiveSection] = useState<string>("home");
  const { theme, toggleTheme } = useTheme();
  // The section a nav click is scrolling to. The highlight still sweeps through the sections passed
  // on the way, then lands here once scrolling settles. A second click replaces it.
  const clickTarget = useRef<string | null>(null);
  const settleTimer = useRef<number | undefined>(undefined);

  const land = useCallback(() => {
    window.clearTimeout(settleTimer.current);
    if (clickTarget.current) setActiveSection(clickTarget.current);
    clickTarget.current = null;
  }, []);

  const landAfter = useCallback(
    (ms: number) => {
      window.clearTimeout(settleTimer.current);
      settleTimer.current = window.setTimeout(land, ms);
    },
    [land],
  );

  useEffect(() => {
    let frame = 0;
    let lastHash = "";
    const update = () => {
      frame = 0;
      const id = sectionInView();
      setActiveSection(id);
      if (!clickTarget.current && id !== lastHash) {
        lastHash = id;
        window.history.replaceState(null, "", `#${id}`);
      }
    };
    const handleScroll = () => {
      if (clickTarget.current) {
        // The scroll is under way: wait for scrollend, or for a pause where scrollend isn't supported.
        if (hasScrollEnd) window.clearTimeout(settleTimer.current);
        else landAfter(SETTLE_MS);
      }
      if (!frame) frame = requestAnimationFrame(update);
    };
    const handleScrollEnd = () => {
      if (clickTarget.current) land();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("scrollend", handleScrollEnd);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scrollend", handleScrollEnd);
      cancelAnimationFrame(frame);
      window.clearTimeout(settleTimer.current);
    };
  }, [land, landAfter]);

  const handleNavClick = (sectionId: string, event: React.MouseEvent): void => {
    event.preventDefault();
    clickTarget.current = sectionId;
    window.history.pushState(null, "", `#${sectionId}`);
    onNavigate(sectionId);
    // Lands straight away if the section is already in place and nothing scrolls; the first scroll
    // event cancels this and the scroll's end lands it instead.
    landAfter(SETTLE_MS);
  };

  const isLight = theme === "light";

  return (
    <nav className="NavBar" aria-label="Sections">
      <ul>
        {navButtons.map((button) => {
          const isActive = button.sectionId === activeSection;
          return (
            <li key={button.sectionId}>
              <a
                href={`#${button.sectionId}`}
                className={isActive ? "ActiveNavBtn" : "NavButton"}
                aria-current={isActive ? "true" : undefined}
                onClick={(e) => handleNavClick(button.sectionId, e)}
              >
                <span className="NavLabelFull">{button.text}</span>
                <span className="NavLabelShort" aria-hidden="true">
                  {button.shortText}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
      <button
        type="button"
        className="LightSwitch"
        aria-pressed={isLight}
        aria-label="Light mode"
        title={isLight ? "Switch to dark mode" : "Switch to light mode"}
        onClick={toggleTheme}
      >
        {/* The bulb outline is always drawn; the glass fills and the rays appear when it's on. */}
        <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
          <g className="LightSwitchRays" strokeLinecap="round">
            <path d="M12 1.6v1.6M4.6 4.6l1.1 1.1M19.4 4.6l-1.1 1.1M2.2 11.4h1.6M20.2 11.4h1.6" />
          </g>
          <path
            className="LightSwitchGlass"
            d="M12 5.2a6 6 0 0 0-3.6 10.8c.6.5 1 1.2 1 2V18.4h5.2V18c0-.8.4-1.5 1-2A6 6 0 0 0 12 5.2z"
          />
          <path d="M9.6 20.2h4.8M10.2 22.2h3.6" strokeLinecap="round" />
        </svg>
      </button>
    </nav>
  );
}
