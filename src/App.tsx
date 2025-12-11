import { useCallback, useEffect } from "react";
import "./App.css";
import { NavBar } from "./scripts/navbar/NavBar";
import { BottomBar } from "./scripts/bottom bar/BottomBar";
import { Home } from "./scripts/pages/home-page/Home";
import { Resume } from "./scripts/pages/resume-page/Resume";
import { About } from "./scripts/pages/about-page/About";
import ProjectCards from "./scripts/pages/project-page/ProjectCards";
import { ContactMeForm } from "./scripts/contact-me-form/ContactMeForm";

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
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      setTimeout(() => {
        scrollToSection(hash);
      }, 100);
    }

    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [handleHashChange, scrollToSection]);

  const pageSectionClassName = "page-section";

  return (
    <div className="App">
      <NavBar onNavigate={scrollToSection} />
      <main className="main-content">
        <section id="home" className={pageSectionClassName}>
          <Home />
        </section>
        <section id="about" className={pageSectionClassName}>
          <About />
        </section>
        <section id="projects" className={pageSectionClassName}>
          <ProjectCards />
        </section>
        <section id="resume" className={pageSectionClassName}>
          <Resume />
        </section>
        <section id="contact-form" className={pageSectionClassName}>
          <ContactMeForm />
        </section>
        <section id="contact-bar">
          <BottomBar />
        </section>
      </main>
    </div>
  );
}

export default App;
