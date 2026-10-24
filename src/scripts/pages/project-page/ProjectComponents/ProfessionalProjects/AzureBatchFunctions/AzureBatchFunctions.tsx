import { ProjectDetail } from "../../ProjectDetail/ProjectDetail";

export function AzureBatchFunctions() {
  return (
    <ProjectDetail
      title="Azure Cloud Functions for Internal Batch Jobs"
      subtitle="Serverless functions for automating critical business processes"
      metric={["−60%", "incidents per month"]}
      pointsHeading="Key Features"
      points={[
        ["Serverless architecture", "Azure Functions for cost-effective, scalable automation"],
        ["Scheduled execution", "Timer triggers for reliable batch processing"],
        ["Cloud integration", "Azure Storage, Service Bus and databases"],
        ["Error handling", "Robust error handling and monitoring for production reliability"],
      ]}
      tech={["Java", "Spring Boot", "JUnit", "MS SQL Server", "Azure Functions", "Durable Functions"]}
    >
      <p>
        Developed serverless Azure Cloud Functions to automate internal batch
        processing jobs, replacing manual processes with reliable, scheduled
        automation running in the cloud.
      </p>
      <p>
        These functions handle critical business operations that run on
        scheduled intervals, processing data, generating reports and triggering
        workflows without manual intervention.
      </p>
    </ProjectDetail>
  );
}
