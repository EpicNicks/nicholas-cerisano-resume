import { ProjectDetail } from "../../ProjectDetail/ProjectDetail";

export function EndToEndTesting() {
  return (
    <ProjectDetail
      title="End-to-End Automated Testing"
      subtitle="Comprehensive automation covering 90%+ of application flows"
      metric={["2 days → 2 h", "regression testing"]}
      pointsHeading="Key Achievements"
      points={[
        ["Time savings", "Regression testing reduced from 2 days to 2 hours"],
        ["High coverage", "90%+ of critical user flows"],
        ["CI/CD integration", "Tests run in the deployment pipelines"],
      ]}
      tech={["JavaScript", "Node.js", "Puppeteer", "Jest", "ReadyAPI", "CI/CD"]}
    >
      <p>
        Built an end-to-end testing suite with Puppeteer.js that cut regression
        testing time and improved software quality across internal applications
        such as the Moneris Risk Database.
      </p>
      <p>
        The suite covers 90% of critical user flows and runs in CI/CD pipelines,
        catching issues before they reach users.
      </p>
    </ProjectDetail>
  );
}
