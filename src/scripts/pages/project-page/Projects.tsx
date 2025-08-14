import React, { useState } from "react";
import "./Projects.css";
import { Sidebar } from "./Sidebar/Sidebar";
import { SpaceShooter } from "./ProjectComponents/SpaceShooter";
import { GlitchGarden } from "./ProjectComponents/GlitchGarden";
import { GameDay } from "./ProjectComponents/GameDay";
import { InfiniteRunner } from "./ProjectComponents/Infinite Runner";
import { Portfolio } from "./ProjectComponents/Portfolio";

function DefaultPage() {
  return (
    <div className="ProjectDefault">
      <h1>Welcome to the Project Page</h1>
      <h3>
        Feel free to click on the sidebar buttons to get a look at some of my
        personal projects.
      </h3>
    </div>
  );
}

export function Projects() {
  const [currentProject, setCurrentProject] = useState("default");
  const renderCurrentProject = () => {
    switch (currentProject) {
      case "space-shooter":
        return <SpaceShooter />;
      case "glitch-garden":
        return <GlitchGarden />;
      case "game-day":
        return <GameDay />;
      case "infinite-runner":
        return <InfiniteRunner />;
      case "portfolio":
        return <Portfolio />;
      case "default":
      default:
        return <DefaultPage />;
    }
  };

  return (
    <div className="Projects">
      <Sidebar
        currentProject={currentProject}
        onProjectChange={(curProj) => setCurrentProject(curProj)}
      />
      <div className="project-content">{renderCurrentProject()}</div>
    </div>
  );
}
