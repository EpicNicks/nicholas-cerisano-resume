import "./InternalFraudManagement.css";

export function InternalFraudManagement() {
  return (
    <div className="InternalFraudManagement">
      <div className="InternalFraudManagementHeader">
        <h1>Internal Fraud Management System</h1>
        <h3>Enterprise application for tracking and managing fraud cases</h3>
      </div>
      <div className="InternalFraudManagementText">
        <p>
          I led a 4-person agile team to redesign and modernize a critical
          internal business application, transforming it from a legacy system to
          a cloud-native solution running on Azure.
        </p>
        <p>
          As the sole front-end developer on this project, I rewrote the entire
          client-side application using React and TypeScript, creating a
          sustainable codebase with minimized technical debt. The migration to
          Azure cloud infrastructure dramatically improved system reliability.
        </p>

        <div className="InternalFraudManagement-features">
          <h4>Key Achievements</h4>
          <ul>
            <li>
              <strong>Improved Uptime:</strong> Increased system availability
              from 99.5% to 99.99% through Azure cloud migration
            </li>
            <li>
              <strong>API Performance:</strong> Enhanced API performance by 50%
              via Redux Toolkit integration
            </li>
            <li>
              <strong>Code Quality:</strong> Maintained 90%+ test coverage and
              introduced coding standards to improve developer experience
            </li>
            <li>
              <strong>Technical Leadership:</strong> Reviewed code and
              collaborated with senior developers to deliver evolving business
              requirements
            </li>
          </ul>
        </div>

        <div className="InternalFraudManagement-tech">
          <h4>Technologies Used</h4>
          <p>
            <span className="tech-badge">React</span>
            <span className="tech-badge">TypeScript</span>
            <span className="tech-badge">Jest</span>
            <span className="tech-badge">Redux Toolkit</span>
            <span className="tech-badge">Java</span>
            <span className="tech-badge">Spring Boot</span>
            <span className="tech-badge">REST API</span>
            <span className="tech-badge">JUnit</span>
            <span className="tech-badge">Azure</span>
            <span className="tech-badge">MS SQL Server</span>
          </p>
        </div>
      </div>
    </div>
  );
}
