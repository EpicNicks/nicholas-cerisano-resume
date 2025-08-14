import React, { Component } from "react";
import { SideButton } from "./SideButton";
import "./Sidebar.css";
import { ProjectId } from "../Projects";

interface IProps {
  currentProject: string;
  onProjectChange: (projectId: ProjectId) => void;
}

interface IState {
  activeBtn: SideButton | null;
  sideBtns: Array<SideButton>;
}

export class Sidebar extends Component<IProps, IState> {
  state = {
    activeBtn: null,
    sideBtns: [] as SideButton[],
  };

  setActiveStateId = (id: ProjectId): void => {
    this.props.onProjectChange(id);
  };

  getCurrentProject = (): string => {
    return this.props.currentProject;
  };

  componentDidMount(): void {
    if (this.state.activeBtn === null) {
      this.setState({
        activeBtn: this.state.sideBtns[0],
        sideBtns: this.state.sideBtns,
      });
    }
  }

  render() {
    return (
      <div className="sidebar">
        <div className="sidebar-content">
          <SideButton text="Overview" id="default" navBar={this} />
          <SideButton
            text="Space Shooter (2018)"
            id="space-shooter"
            navBar={this}
          />
          <SideButton
            text="Glitch Garden (2019)"
            id="glitch-garden"
            navBar={this}
          />
          <SideButton text="Game Day (2016)" id="game-day" navBar={this} />
          <SideButton
            text="Infinite Runner (2019)"
            id="infinite-runner"
            navBar={this}
          />
          <SideButton
            text="Calories In (2023-2025)"
            id="calories-in"
            navBar={this}
          />
          <SideButton text="Portfolio" id="portfolio" navBar={this} />
        </div>
      </div>
    );
  }
}
