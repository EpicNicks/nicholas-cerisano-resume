import { ProjectDetail } from "../../ProjectDetail/ProjectDetail";

export function InternalFraudManagement() {
  return (
    <ProjectDetail
      title="Internal Fraud Management System"
      subtitle="Enterprise application for tracking and managing fraud cases"
      metric={["99.99%", "uptime, up from 99.5%"]}
      pointsHeading="Key Achievements"
      points={[
        ["Improved uptime", "System availability raised from 99.5% to 99.99% through the Azure migration"],
        ["API performance", "50% faster through Redux Toolkit (RTK Query) caching"],
        ["Code quality", "90%+ test coverage and new team coding standards"],
        ["Technical leadership", "Reviewed code and worked with senior developers on evolving requirements"],
      ]}
      tech={["React", "TypeScript", "Jest", "Redux Toolkit", "Java", "Spring Boot", "REST API", "JUnit", "Azure", "MS SQL Server"]}
    >
      <p>
        Led a 4-person agile team to redesign and modernize a critical internal
        business application, moving it from a legacy system to a cloud-native
        solution on Azure.
      </p>
      <p>
        As the sole front-end developer, I rewrote the entire client-side
        application in React and TypeScript, leaving a sustainable codebase
        with minimal technical debt.
      </p>
    </ProjectDetail>
  );
}
