import React, { useCallback, useEffect } from "react";
import "./App.css";
import { NavBar } from "./scripts/navbar/NavBar";
import { BottomBar } from "./scripts/bottom bar/BottomBar";
import { Home } from "./scripts/pages/home-page/Home";
import { Resume } from "./scripts/pages/resume-page/Resume";
import { Projects } from "./scripts/pages/project-page/Projects";
import { About } from "./scripts/pages/about-page/About";

function App() {
  const scrollToSection = useCallback((sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, []);

  const handleHashChange = useCallback(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      scrollToSection(hash);
    }
  }, [scrollToSection]);

  useEffect(() => {
    // componentDidMount equivalent
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        scrollToSection(hash);
      }, 100);
    }

    window.addEventListener("hashchange", handleHashChange);

    // componentWillUnmount equivalent (cleanup function)
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [handleHashChange, scrollToSection]);

  return (
    <div className="App">
      <NavBar onNavigate={scrollToSection} />
      <main className="main-content">
        <section id="home" className="page-section">
          <Home />
        </section>
        <section id="about" className="page-section">
          <About />
        </section>
        <section id="resume" className="page-section">
          <Resume />
        </section>
        <section id="projects" className="page-section">
          <Projects />
        </section>
      </main>
      <BottomBar />
    </div>
  );
}

export default App;
