import React, { Component } from "react";
import "./App.css";
import { NavBar } from "./scripts/navbar/NavBar";
import { BottomBar } from "./scripts/bottom bar/BottomBar";

// Import your page components
import { Home } from "./scripts/pages/home-page/Home";
import { Resume } from "./scripts/pages/resume-page/Resume";
import { Projects } from "./scripts/pages/project-page/Projects";
import { About } from "./scripts/pages/about-page/About";

interface IProps {}
interface IState {}

class App extends Component<IProps, IState> {
  // Smooth scroll to section
  scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  componentDidMount(): void {
    // Handle URL hash on page load
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        this.scrollToSection(hash);
      }, 100);
    }

    // Listen for hash changes
    window.addEventListener("hashchange", this.handleHashChange);
  }

  componentWillUnmount(): void {
    window.removeEventListener("hashchange", this.handleHashChange);
  }

  handleHashChange = (): void => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      this.scrollToSection(hash);
    }
  };

  render() {
    return (
      <div className="App">
        <NavBar onNavigate={this.scrollToSection} />
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
}

export default App;
