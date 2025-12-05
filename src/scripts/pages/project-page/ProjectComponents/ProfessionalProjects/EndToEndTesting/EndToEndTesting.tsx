import "./EndToEndTesting.css";

export function EndToEndTesting() {
  return (
    <div className="EndToEndTesting">
      <div className="EndToEndTestingHeader">
        <h1>End-to-End Automated Testing Suite</h1>
        <h3>Comprehensive automation covering 90%+ of application flows</h3>
      </div>
      <div className="EndToEndTestingText">
        <p>
          I built a comprehensive end-to-end testing automation suite using
          Puppeteer.js that dramatically reduced regression testing time and
          improved software quality across multiple enterprise applications.
        </p>
        <p>
          The suite covered 90% of user flows and integrates seamlessly with
          CI/CD pipelines, catching issues early and prevented production
          defects before they could reach users.
        </p>

        <div className="EndToEndTesting-features">
          <h4>Key Achievements</h4>
          <ul>
            <li>
              <strong>Massive Time Savings:</strong> Reduced regression testing
              from 2 days to 2 hours through automation
            </li>
            <li>
              <strong>High Coverage:</strong> Achieved 90%+ test coverage of
              critical user flows across applications
            </li>
            <li>
              <strong>Quality Improvements:</strong> Cut production defects by
              30% through comprehensive automated testing
            </li>
            <li>
              <strong>API Testing:</strong> Increased API reliability by 25% and
              reduced manual testing by 90% using ReadyAPI and Puppeteer
            </li>
            <li>
              <strong>CI/CD Integration:</strong> Integrated tests into
              deployment pipelines for continuous quality assurance
            </li>
          </ul>
        </div>

        <div className="EndToEndTesting-tech">
          <h4>Technologies Used</h4>
          <p>
            <span className="tech-badge">JavaScript</span>
            <span className="tech-badge">JSON</span>
            <span className="tech-badge">Puppeteer.js</span>
            <span className="tech-badge">Node.js</span>
            <span className="tech-badge">Jest</span>
            <span className="tech-badge">ReadyAPI</span>
            <span className="tech-badge">CI/CD pipelines</span>
          </p>
        </div>
      </div>
    </div>
  );
}
