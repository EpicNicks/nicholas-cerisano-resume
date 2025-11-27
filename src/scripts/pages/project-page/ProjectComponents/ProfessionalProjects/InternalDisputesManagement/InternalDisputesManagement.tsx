import React from "react";
import "./InternalDisputesManagement.css";

export function InternalDisputesManagement() {
  return (
    <div className="InternalDisputesManagement">
      <div className="InternalDisputesManagementHeader">
        <h1>Internal Disputes Management System</h1>
        <h3>
          Fullstack web application for managing internal business disputes
        </h3>
      </div>
      <div className="InternalDisputesManagementText">
        <p>
          Contributed to a large-scale enterprise application designed to manage
          internal fraud cases, working in full-stack capacity to deliver
          features that support critical business operations.
        </p>
        <p>
          Collaborated with senior developers and stakeholders to understand
          complex business requirements and implement solutions that improved
          workflow efficiency and case management capabilities.
        </p>

        <div className="InternalDisputesManagement-features">
          <h4>Key Contributions</h4>
          <ul>
            <li>
              <strong>Enterprise Scale:</strong> Worked on large-scale
              application handling critical fraud prevention operations
            </li>
            <li>
              <strong>Full-Stack Development:</strong> Developed features across
              React front-end and Java Spring Boot backend
            </li>
            <li>
              <strong>Code Quality:</strong> Maintained high test coverage and
              participated in code reviews
            </li>
            <li>
              <strong>Team Collaboration:</strong> Worked closely with senior
              developers to deliver evolving business requirements
            </li>
          </ul>
        </div>

        <div className="InternalDisputesManagement-tech">
          <h4>Technologies Used</h4>
          <p>
            <span className="tech-badge">React</span>
            <span className="tech-badge">TypeScript</span>
            <span className="tech-badge">Redux Toolkit</span>
            <span className="tech-badge">Jest</span>
            <span className="tech-badge">Java</span>
            <span className="tech-badge">Spring Boot</span>
            <span className="tech-badge">REST API</span>
            <span className="tech-badge">JUnit</span>
            <span className="tech-badge">MS SQL Server</span>
            <span className="tech-badge">Azure</span>
            <span className="tech-badge">Docker</span>
          </p>
        </div>
      </div>
    </div>
  );
}
