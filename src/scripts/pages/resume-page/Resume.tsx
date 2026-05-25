import { useState } from "react";
import { FiSun, FiMoon, FiDownload } from "react-icons/fi";
import "./Resume.css";

import resumePdf from "../../../media/documents/Nicholas Cerisano Resume.pdf";

export const Resume = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumePdf;
    link.download = "Nicholas Cerisano Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className={`resume-container ${isDarkMode ? "dark-mode" : "light-mode"}`}
    >
      <div className="resume-controls">
        <label className="theme-toggle-switch">
          <input
            type="checkbox"
            checked={isDarkMode}
            onChange={toggleTheme}
            aria-label="Toggle theme"
          />
          <span className="slider">
            <FiMoon className="moon-icon" size={14} />
            <FiSun className="sun-icon" size={14} />
          </span>
        </label>
        <button
          className="download-btn"
          onClick={handleDownload}
          aria-label="Download resume"
        >
          <FiDownload size={16} />
          Download PDF Version
        </button>
      </div>

      <div className="resume-content">
        <header className="resume-header">
          <h1 className="resume-name">Nicholas Cerisano</h1>
          <div className="resume-contact-info">
            <a
              href="https://www.linkedin.com/in/nicholas-cerisano"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <span className="resume-separator">•</span>
            <a
              href="https://github.com/EpicNicks"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </header>

        <div className="resume-layout">
          <aside className="resume-sidebar">
            <div className="resume-section">
              <h2 className="resume-section-title">Contact</h2>
              <div className="resume-contact-details">
                <p>Toronto, ON</p>
              </div>
            </div>

            <div className="resume-section">
              <h2 className="resume-section-title">Skills</h2>
              <div className="resume-skills-list">
                <div className="resume-skill-category">
                  <strong>Languages</strong>
                  <p>
                    C#, C++, C, Python, Java, JavaScript, TypeScript, Kotlin,
                    Dart, Go, SQL, MS SQL Server, PostgreSQL, GraphQL
                  </p>
                </div>
                <div className="resume-skill-category">
                  <strong>Frameworks</strong>
                  <p>
                    React, Redux Toolkit, Spring Boot, Kafka, Node.js, Unity,
                    Flutter, WPF, OpenGL, NVIDIA PhysX, SFML.NET, GitHub
                    Copilot, Claude Code
                  </p>
                </div>
                <div className="resume-skill-category">
                  <strong>Cloud & Tools</strong>
                  <p>
                    Azure, AWS, Docker, Kubernetes, Git, CI/CD, JIRA, SonarQube
                  </p>
                </div>
                <div className="resume-skill-category">
                  <strong>Testing</strong>
                  <p>
                    Unit, Integration, API, E2E, ReadyAPI, Puppeteer, Jest,
                    JUnit, Mockito, NUnit, GoogleTest
                  </p>
                </div>
              </div>
            </div>

            <div className="resume-section">
              <h2 className="resume-section-title">Education</h2>
              <div className="resume-education">
                <strong>Bachelor of Computer Science</strong>
                <p className="resume-degree-detail">Specialized Honours</p>
                <p className="resume-institution">York University</p>
                <p className="resume-date">2022</p>
                <ul className="resume-list">
                  <li className="resume-list-item">
                    Academic entrance scholarship
                  </li>
                  <li className="resume-list-item">Hackathon participant</li>
                  <li className="resume-list-item">
                    Returned as a Hackathon mentor
                  </li>
                </ul>
              </div>
            </div>

            <div className="resume-section">
              <h2 className="resume-section-title">Certifications</h2>
              <div className="resume-certifications">
                <p>
                  <strong>Microsoft Azure Fundamentals</strong>
                </p>
                <p className="resume-cert-detail">AZ-900, 2022</p>
              </div>
            </div>
          </aside>

          <main className="resume-main">
            <div className="resume-section">
              <h2 className="resume-section-title">Profile</h2>
              <p>
                Full-stack software developer with 4+ years of delivering
                high-availability web applications in Agile environments.
                Skilled in React TypeScript and JavaScript, Java Spring, and
                Azure, with a proven record of improving performance,
                reliability, and workflows. Recognized for system design and
                collaborative leadership.
              </p>
            </div>

            <div className="resume-section">
              <h2 className="resume-section-title">Professional Experience</h2>

              <div className="resume-job">
                <div className="resume-job-header">
                  <div>
                    <h3 className="resume-job-title">Software Developer II</h3>
                    <p className="resume-company">Moneris</p>
                  </div>
                  <span className="resume-date">Nov 2023 - Present</span>
                </div>
                <div className="resume-job-summary">
                  Worked in a full-stack capacity with ownership and
                  accountability over several business domains of technical
                  subject matter expertise, including multiple Java Spring Azure
                  cloud functions and two major full-stack web applications in a
                  Java Spring, React TypeScript, and MS SQL tech stack. Worked
                  in an Agile environment with daily standups and a bi-weekly
                  sprint cycle, tracking work and managing delivery through
                  JIRA, collaborating with senior developers and stakeholders to
                  deliver evolving business requirements.
                </div>
                <ul className="resume-list">
                  <li className="resume-list-item">
                    Led a 4-person agile team to redesign and modernize a
                    full-stack critical internal business application, improving
                    uptime from 99.5% to 99.99% by migrating to Azure cloud as
                    part of a greater cloud modernization initiative.
                  </li>
                  <li className="resume-list-item">
                    Drove 5 modernization projects migrating legacy EJB
                    processes to Java Spring and Azure cloud CI/CD deployment
                    pipelines, prioritizing maintainability and reducing
                    incidents by 60% per month on average.
                  </li>
                  <li className="resume-list-item">
                    Collaborated with business users of an internal disputes
                    case management UI to deliver features and more efficient
                    interfaces, enabling users to resolve 15% more cases per
                    week compared to the legacy system.
                  </li>
                  <li className="resume-list-item">
                    Maintained 90%+ full-stack test coverage as reported by
                    SonarQube using JUnit and Mockito for Java services and Jest
                    for the React frontend.
                  </li>
                  <li className="resume-list-item">
                    Established coding standards and conducted code reviews,
                    improving consistency and developer experience across the
                    team.
                  </li>
                  <li className="resume-list-item">
                    Mentored 2 summer interns on code quality practices and
                    subject matter knowledge, accelerating their onboarding time
                    by 2 weeks.
                  </li>
                </ul>
              </div>

              <div className="resume-job">
                <div className="resume-job-header">
                  <div>
                    <h3 className="resume-job-title">Software Developer I</h3>
                    <p className="resume-company">Moneris</p>
                  </div>
                  <span className="resume-date">Apr 2022 - Nov 2023</span>
                </div>
                <div className="resume-job-summary">
                  Developed and maintained full-stack features for internal case
                  management and fraud reporting applications in a Java Spring
                  backend with MS SQL database and React TypeScript frontend.
                  Collaborated in an Agile team environment with senior
                  developers, product owners, and stakeholders to deliver
                  evolving business requirements, managing work through JIRA
                  from ticket creation to deployment, while maintaining high
                  code quality and test coverage.
                </div>
                <ul className="resume-list">
                  <li className="resume-list-item">
                    Self-pitched and led full-stack rewrite of a legacy
                    application, initially collaborating with two backend
                    developers on the Java Spring and MS SQL layer before taking
                    sole ownership of the entire stack including the React
                    TypeScript frontend, delivering new features end-to-end.
                  </li>
                  <li className="resume-list-item">
                    Increased API reliability by 25%, reduced manual testing by
                    90%, and cut production defects by 30% through automated API
                    testing using ReadyAPI.
                  </li>
                  <li className="resume-list-item">
                    Improved API performance by 50% by introducing RTK Query for
                    client-side caching, reducing redundant API calls.
                  </li>
                  <li className="resume-list-item">
                    Promoted to Developer II in 18 months vs. 24-month average,
                    recognized for code quality and initiative.
                  </li>
                </ul>
              </div>

              <div className="resume-job">
                <div className="resume-job-header">
                  <div>
                    <h3 className="resume-job-title">
                      Software Developer Intern
                    </h3>
                    <p className="resume-company">Moneris</p>
                  </div>
                  <span className="resume-date">May 2021 - Aug 2021</span>
                </div>
                <div className="resume-job-summary">
                  Worked alongside senior developers and fellow interns to
                  deliver features in a full-stack capacity in Java Spring for
                  the backend and React with JavaScript, later replaced with
                  TypeScript, for the frontend.
                </div>
                <ul className="resume-list">
                  <li className="resume-list-item">
                    Advocated TypeScript adoption, preventing 5-10 potential
                    issues per sprint; offered full-time role after internship.
                  </li>
                  <li className="resume-list-item">
                    Created and delivered presentations on modernizing the
                    team's frontend codebases, convincing senior developers to
                    adopt TypeScript and pivot away from JavaScript.
                  </li>
                </ul>
              </div>

              <div className="resume-job">
                <div className="resume-job-header">
                  <div>
                    <h3 className="resume-job-title">
                      Software Developer Intern
                    </h3>
                    <p className="resume-company">Moneris</p>
                  </div>
                  <span className="resume-date">May 2019 - Aug 2019</span>
                </div>
                <div className="resume-job-summary">
                  Learned and applied Puppeteer.js to create an end-to-end
                  automated testing suite leveraging Jest.js for internal web
                  applications.
                </div>
                <ul className="resume-list">
                  <li className="resume-list-item">
                    Sole developer of JavaScript E2E automation suite using
                    Puppeteer and Jest, growing coverage from near-zero to 90%
                    of critical OMS user flows and reducing regression testing
                    from 2 days to 2 hours per release cycle.
                  </li>
                  <li className="resume-list-item">
                    Proactively identified and reported edge case defects in
                    complex user flows to the development team, improving
                    pre-release defect detection and reducing risk of issues
                    reaching production.
                  </li>
                </ul>
              </div>
            </div>

            <div className="resume-section">
              <h2 className="resume-section-title">Projects</h2>

              <div className="resume-project">
                <div className="resume-project-header">
                  <h3 className="resume-project-title">CaloriesIn</h3>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.aspirant.calorie_tracker"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-link"
                    style={{ color: "#3DDC84" }}
                  >
                    View on Google Play{" "}
                    <span className="animated-arrow">→</span>
                  </a>
                  <a
                    href="https://github.com/EpicNicks/Calories-In-SimpleCalorieCounter-"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-link"
                  >
                    View on GitHub <span className="animated-arrow">→</span>
                  </a>
                </div>
                <p className="resume-project-tech">
                  Flutter Mobile Calorie Tracker
                </p>
                <ul className="resume-list">
                  <li className="resume-list-item">
                    Mobile app for tracking caloric intake, setting goals, and
                    monitoring progress. Data is stored locally in a SQLite
                    database with an option to export personal data in CSV
                    format.
                  </li>
                  <li className="resume-list-item">
                    Written in Dart using the Flutter framework, leveraging
                    Kotlin for areas requiring native Android capabilities,
                    targeting Android devices with a clean and intuitive user
                    interface.
                  </li>
                </ul>
              </div>

              <div className="resume-project">
                <div className="resume-project-header">
                  <h3 className="resume-project-title">N2Engine</h3>
                  <a
                    href="https://github.com/EpicNicks/N2Engine"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-link"
                  >
                    View on GitHub <span className="animated-arrow">→</span>
                  </a>
                </div>
                <p className="resume-project-tech">C++ Game Engine</p>
                <ul className="resume-list">
                  <li className="resume-list-item">
                    Integration with Nvidia PhysX and OpenGL for physics and
                    graphics rendering systems.
                  </li>
                  <li className="resume-list-item">
                    Applied lessons from developing NEngine in C# to the
                    architecture of N2Engine.
                  </li>
                  <li className="resume-list-item">
                    Modern C++23 design patterns for memory safety and
                    performance.
                  </li>
                </ul>
              </div>

              <div className="resume-project">
                <div className="resume-project-header">
                  <h3 className="resume-project-title">NEngine</h3>
                  <a
                    href="https://github.com/EpicNicks/NEngineEditor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-link"
                  >
                    View on GitHub <span className="animated-arrow">→</span>
                  </a>
                </div>
                <p className="resume-project-tech">C# Game Engine + Editor</p>
                <ul className="resume-list">
                  <li className="resume-list-item">
                    Designed Unity-inspired object/component system for
                    flexible, maintainable architecture.
                  </li>
                  <li className="resume-list-item">
                    Built event-driven MVVM architecture WPF editor with content
                    browser, inspector, and scene tools for games.
                  </li>
                  <li className="resume-list-item">
                    Enabled runtime property reflection; optimized update loop
                    using SFML.NET.
                  </li>
                </ul>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};
