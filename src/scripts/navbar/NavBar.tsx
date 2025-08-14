import { NavButton } from "./NavButton";
import "./NavBar.css";
import { Component } from "react";
import React from "react";

interface IProps {
  onNavigate: (sectionId: string) => void;
}

interface IState {
  activeBtn: NavButton | null;
  navBtns: Array<NavButton>;
  currentSection: string;
}

let activeStateId: string | null = null;

export class NavBar extends Component<IProps, IState> {
  private intersectionObserver: IntersectionObserver | null = null;

  state = {
    activeBtn: null,
    navBtns: [] as NavButton[],
    currentSection: "home",
  };

  constructor(props: Readonly<IProps>) {
    super(props);
    if (activeStateId === null) {
      activeStateId = "home";
    }
  }

  setActiveStateId = (id: string): void => {
    activeStateId = id;
    this.setState({ currentSection: id });
  };

  getActiveStateId = (): string | null => activeStateId;

  getCurrentSection = (): string => this.state.currentSection;

  handleNavClick = (sectionId: string, event?: React.MouseEvent): void => {
    if (event) {
      event.preventDefault();
    }

    // Update URL hash without page reload
    window.history.pushState(null, "", `#${sectionId}`);

    // Update active state
    this.setActiveStateId(sectionId);

    // Scroll to section
    this.props.onNavigate(sectionId);
  };

  componentDidMount(): void {
    // Set up intersection observer to track which section is in view
    const options = {
      root: null,
      rootMargin: "-50% 0px -50% 0px", // Trigger when section is in the middle of viewport
      threshold: 0,
    };

    this.intersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          if (sectionId && sectionId !== this.state.currentSection) {
            this.setActiveStateId(sectionId);
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
      if (element && this.intersectionObserver) {
        this.intersectionObserver.observe(element);
      }
    });

    if (this.state.activeBtn === null) {
      this.setState({
        activeBtn: this.state.navBtns[0],
        navBtns: this.state.navBtns,
      });
    }
  }

  componentWillUnmount(): void {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
    }
  }

  render() {
    return (
      <div className="NavBar">
        <ul>
          <li>
            <a href="#home" onClick={(e) => this.handleNavClick("home", e)}>
              <NavButton
                text="Home"
                id={["", "home"]}
                navBar={this}
                onClick={() => this.handleNavClick("home")}
              />
            </a>
          </li>
          <li>
            <a href="#about" onClick={(e) => this.handleNavClick("about", e)}>
              <NavButton
                text="About Me"
                id={["about"]}
                navBar={this}
                onClick={() => this.handleNavClick("about")}
              />
            </a>
          </li>
          <li>
            <a href="#resume" onClick={(e) => this.handleNavClick("resume", e)}>
              <NavButton
                text="Resume"
                id={["resume"]}
                navBar={this}
                onClick={() => this.handleNavClick("resume")}
              />
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={(e) => this.handleNavClick("projects", e)}
            >
              <NavButton
                text="My Projects"
                id={["projects"]}
                navBar={this}
                onClick={() => this.handleNavClick("projects")}
              />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
