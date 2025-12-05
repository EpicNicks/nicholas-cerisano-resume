import { useState } from "react";
import "./Projects.css";
import { Sidebar } from "./Sidebar/Sidebar";
import { SpaceShooter } from "./ProjectComponents/UnusedProjects/SpaceShooter";
import { GlitchGarden } from "./ProjectComponents/UnusedProjects/GlitchGarden";
import { GameDay } from "./ProjectComponents/UnusedProjects/GameDay";
import { Portfolio } from "./ProjectComponents/UnusedProjects/Portfolio";
import { CaloriesIn } from "./ProjectComponents/PersonalProjects/CaloriesIn/CaloriesIn";
import { DefaultPage } from "./ProjectComponents/UnusedProjects/DefaultPage";
import { NEngineEditor } from "./ProjectComponents/PersonalProjects/NEngineEditor/NEngineEditor";
import { UniversityProjects } from "./ProjectComponents/UniversityProjects/UniversityProjects";
import type { ProjectId } from "./ProjectData";

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
      case "university-projects":
        return <UniversityProjects />;
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
