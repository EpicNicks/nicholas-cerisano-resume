import React, { Component } from "react";
import "./Projects.css";

///#region Component imports
import { Sidebar } from "./Sidebar/Sidebar";

import { SpaceShooter } from "./ProjectComponents/SpaceShooter";
import { GlitchGarden } from "./ProjectComponents/GlitchGarden";
import { GameDay } from "./ProjectComponents/GameDay";
import { InfiniteRunner } from "./ProjectComponents/Infinite Runner";
import { Portfolio } from "./ProjectComponents/Portfolio";
///#endregion

interface IProps {}

interface IState {
  currentProject: string;
}

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

export class Projects extends Component<IProps, IState> {
  state = {
    currentProject: "default",
  };

  // Method to change the current project
  setCurrentProject = (projectId: string): void => {
    this.setState({ currentProject: projectId });
  };

  // Method to render the current project component
  renderCurrentProject = () => {
    switch (this.state.currentProject) {
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

  render() {
    return (
      <div className="Projects">
        <Sidebar
          currentProject={this.state.currentProject}
          onProjectChange={this.setCurrentProject}
        />
        <div className="project-content">{this.renderCurrentProject()}</div>
      </div>
    );
  }
}
