import React, { useState, useEffect } from "react";
import { SideButton } from "./SideButton";
import "./Sidebar.css";
import { ProjectId } from "../Projects";

interface SidebarProps {
  currentProject: string;
  onProjectChange: (projectId: ProjectId) => void;
}

// todo: instead of a sidebar, lets do cards layed out that
//  when hovered, highlight in a flashy way
//  when clicked, animate to expand to fill the screen with the info + demo if available

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
    { title: "N2Engine (2025)", id: "default" },
    { title: "NEngine Editor (2024)", id: "nengine-editor" },
    { title: "Calories In (2023)", id: "calories-in" },
    { title: "University Projects (2019-2021)", id: "university-projects"},
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
