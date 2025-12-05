import "./AzureBatchFunctions.css";

export function AzureBatchFunctions() {
  return (
    <div className="AzureBatchFunctions">
      <div className="AzureBatchFunctionsHeader">
        <h1>Azure Cloud Functions for Internal Batch Jobs</h1>
        <h3>Serverless functions for automating critical business processes</h3>
      </div>
      <div className="AzureBatchFunctionsText">
        <p>
          I developed serverless Azure Cloud Functions to automate internal
          batch processing jobs, replacing manual processes with reliable,
          scheduled automation running in the cloud.
        </p>
        <p>
          These functions handle critical business operations that need to run
          on scheduled intervals, processing data, generating reports, and
          triggering workflows without manual intervention.
        </p>

        <div className="AzureBatchFunctions-features">
          <h4>Key Features</h4>
          <ul>
            <li>
              <strong>Serverless Architecture:</strong> Leveraged Azure
              Functions for cost-effective, scalable automation
            </li>
            <li>
              <strong>Scheduled Execution:</strong> Implemented timer triggers
              for reliable, automated batch processing
            </li>
            <li>
              <strong>Cloud Integration:</strong> Integrated with Azure services
              including Storage, Service Bus, and databases
            </li>
            <li>
              <strong>Error Handling:</strong> Built robust error handling and
              monitoring for production reliability
            </li>
          </ul>
        </div>

        <div className="AzureBatchFunctions-tech">
          <h4>Technologies Used</h4>
          <p>
            <span className="tech-badge">Java</span>
            <span className="tech-badge">Spring Boot</span>
            <span className="tech-badge">JUnit</span>
            <span className="tech-badge">MS SQL Server</span>
            <span className="tech-badge">Azure Functions</span>
            <span className="tech-badge">Durable Functions</span>
          </p>
        </div>
      </div>
    </div>
  );
}
