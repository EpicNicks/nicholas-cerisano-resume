import React, { useState, useEffect } from "react";
import { SideButton } from "./SideButton";
import "./Sidebar.css";
import { ProjectId } from "../Projects";

interface SidebarProps {
  currentProject: string;
  onProjectChange: (projectId: ProjectId) => void;
}

export function Sidebar({ currentProject, onProjectChange }: SidebarProps) {
  const [activeProject, setActiveProject] = useState<ProjectId>(
    (currentProject as ProjectId) || "default"
  );

  useEffect(() => {
    setActiveProject(currentProject as ProjectId);
  }, [currentProject]);

  const handleButtonClick = (projectId: ProjectId) => {
    setActiveProject(projectId);
    onProjectChange(projectId);
  };

  const buttons: { title: string; id: ProjectId }[] = [
    { title: "Overview", id: "default" },
    { title: "Calories In (2023-2025)", id: "calories-in" },
    { title: "NEngine Editor (2024-2025)", id: "nengine-editor" },
    { title: "Infinite Runner (2019)", id: "infinite-runner" },
    { title: "Glitch Garden (2019)", id: "glitch-garden" },
    { title: "Space Shooter (2018)", id: "space-shooter" },
    { title: "Game Day (2016)", id: "game-day" },
    { title: "Portfolio", id: "portfolio" },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-content">
        {buttons.map((button) => (
          <SideButton
            key={button.id}
            text={button.title}
            id={button.id}
            isActive={activeProject === button.id}
            onClick={handleButtonClick}
          />
        ))}
      </div>
    </div>
  );
}
