import React, { Component } from "react";
import { Sidebar } from "./Sidebar";
import "./Sidebar.css";
import { ProjectId } from "../Projects";

interface IProps {
  text: string;
  navBar: Sidebar;
  id: ProjectId;
}

interface IState {}

export class SideButton extends Component<IProps, IState> {
  render() {
    // Get current project from the sidebar instead of URL
    const currentProject = this.props.navBar.getCurrentProject();
    const isActive = currentProject === this.props.id;

    const className = isActive ? "ActiveSideButton" : "SideButton";

    return (
      <div
        className={`${className} ${this.props.id}`} // Keep the ID class for CSS differentiation
        onClick={() => {
          this.props.navBar.setActiveStateId(this.props.id);
          this.props.navBar.setState({ activeBtn: this });
        }}
      >
        {this.props.text}
      </div>
    );
  }
}
