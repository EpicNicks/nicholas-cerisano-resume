import { ProjectDetail } from "../../ProjectDetail/ProjectDetail";

export function InternalDisputesManagement() {
  return (
    <ProjectDetail
      title="Internal Disputes Management System"
      subtitle="Full-stack web application for managing internal business disputes"
      metric={["+15%", "cases resolved per week"]}
      pointsHeading="Key Contributions"
      points={[
        ["Full-stack development", "Features across the React front end and Java Spring Boot back end"],
        ["Code quality", "Maintained high test coverage and took part in code reviews"],
        ["Team collaboration", "Worked closely with senior developers to deliver evolving business requirements"],
      ]}
      tech={["TypeScript", "React", "Redux Toolkit", "Jest", "Java", "Spring Boot", "REST API", "JUnit", "MS SQL Server", "Azure", "Docker"]}
    >
      <p>
        Contributed to a large-scale enterprise application for managing
        internal disputes, working in a full-stack capacity to deliver features
        that support critical business operations.
      </p>
      <p>
        Collaborated with the business users of the disputes case management UI
        to deliver features and more efficient interfaces, enabling them to
        resolve 15% more cases per week than on the legacy system.
      </p>
    </ProjectDetail>
  );
}
