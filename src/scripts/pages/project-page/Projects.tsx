import React, { useState } from "react";
import "./Projects.css";
import { Sidebar } from "./Sidebar/Sidebar";
import { SpaceShooter } from "./ProjectComponents/SpaceShooter";
import { GlitchGarden } from "./ProjectComponents/GlitchGarden";
import { GameDay } from "./ProjectComponents/GameDay";
import { InfiniteRunner } from "./ProjectComponents/Infinite Runner";
import { Portfolio } from "./ProjectComponents/Portfolio";
import { CaloriesIn } from "./ProjectComponents/CaloriesIn";
import { DefaultPage } from "./ProjectComponents/DefaultPage";
import { NEngineEditor } from "./ProjectComponents/NEngineEditor";

export const projectIds = [
  "default",
  "space-shooter",
  "glitch-garden",
  "game-day",
  "infinite-runner",
  "calories-in",
  "portfolio",
  "nengine-editor",
] as const;
export type ProjectId = (typeof projectIds)[number];

export function Projects() {
  const [currentProject, setCurrentProject] = useState<ProjectId>("default");
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
      case "calories-in":
        return <CaloriesIn />;
      case "nengine-editor":
        return <NEngineEditor />;
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
