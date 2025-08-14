import { NavButton } from "./NavButton";
import "./NavBar.css";
import React, { useState, useEffect, useRef, useCallback } from "react";

interface IProps {
  onNavigate: (sectionId: string) => void;
}

interface NavButtonConfig {
  text: string;
  id: string[];
  sectionId: string;
}

// Move activeStateId outside component to maintain global state
let activeStateId: string | null = null;

export const NavBar: React.FC<IProps> = ({ onNavigate }) => {
  const [activeBtnIndex, setActiveBtnIndex] = useState<number>(0);
  const [currentSection, setCurrentSection] = useState<string>("home");
  const intersectionObserverRef = useRef<IntersectionObserver | null>(null);

  const navButtons: NavButtonConfig[] = [
    { text: "Home", id: ["", "home"], sectionId: "home" },
    { text: "About Me", id: ["about"], sectionId: "about" },
    { text: "Resume", id: ["resume"], sectionId: "resume" },
    { text: "My Projects", id: ["projects"], sectionId: "projects" },
  ];

  // Initialize activeStateId on first render
  useEffect(() => {
    if (activeStateId === null) {
      activeStateId = "home";
    }
  }, []);

  const setActiveStateId = useCallback((id: string): void => {
    activeStateId = id;
    setCurrentSection(id);

    // Update active button index
    const index = navButtons.findIndex(
      (btn) => btn.id.includes(id) || (id === "home" && btn.id.includes(""))
    );
    if (index !== -1) {
      setActiveBtnIndex(index);
    }
  }, []);

  const getActiveStateId = useCallback((): string | null => activeStateId, []);

  const getCurrentSection = useCallback(
    (): string => currentSection,
    [currentSection]
  );

  const setActiveButtonIndex = useCallback((index: number): void => {
    setActiveBtnIndex(index);
  }, []);

  const handleNavClick = useCallback(
    (sectionId: string, event?: React.MouseEvent): void => {
      if (event) {
        event.preventDefault();
      }

      // Update URL hash without page reload
      window.history.pushState(null, "", `#${sectionId}`);

      // Update active state
      setActiveStateId(sectionId);

      // Scroll to section
      onNavigate(sectionId);
    },
    [onNavigate, setActiveStateId]
  );

  useEffect(() => {
    // Set up intersection observer to track which section is in view
    const options = {
      root: null,
      rootMargin: "-50% 0px -50% 0px", // Trigger when section is in the middle of viewport
      threshold: 0,
    };

    intersectionObserverRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          if (sectionId && sectionId !== currentSection) {
            setActiveStateId(sectionId);
            // Update URL hash
            window.history.replaceState(null, "", `#${sectionId}`);
          }
        }
      });
    }, options);

    // Observe all sections
    const sections = ["home", "about", "resume", "projects"];
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element && intersectionObserverRef.current) {
        intersectionObserverRef.current.observe(element);
      }
    });

    if (activeBtnIndex === null) {
      setActiveBtnIndex(0);
    }

    // Cleanup function
    return () => {
      if (intersectionObserverRef.current) {
        intersectionObserverRef.current.disconnect();
      }
    };
  }, [currentSection, setActiveStateId]);

  return (
    <div className="NavBar">
      <ul>
        {navButtons.map((button, index) => (
          <li key={button.sectionId}>
            <a
              href={`#${button.sectionId}`}
              onClick={(e) => handleNavClick(button.sectionId, e)}
            >
              <NavButton
                text={button.text}
                id={button.id}
                buttonIndex={index}
                navBar={{
                  setActiveStateId,
                  getActiveStateId,
                  getCurrentSection,
                  setActiveButtonIndex,
                  handleNavClick,
                }}
                onClick={() => handleNavClick(button.sectionId)}
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
