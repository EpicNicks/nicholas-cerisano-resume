import { Component } from "react";
import React from "react";
import { NavBar } from "./NavBar";

interface IProps {
  text: string;
  navBar: NavBar;
  id: Array<string>;
  onClick: () => void;
}

interface IState {}

export class NavButton extends Component<IProps, IState> {
  render() {
    // Check if current section matches this button's ID
    const currentSection = this.props.navBar.getCurrentSection();
    const isActive =
      this.props.id.includes(currentSection) ||
      (currentSection === "home" && this.props.id.includes(""));

    const className = isActive ? "ActiveNavBtn" : "NavButton";

    return (
      <div
        className={className}
        onClick={() => {
          this.props.navBar.setActiveStateId(this.props.id[0] || "home");
          this.props.navBar.setState({ activeBtn: this });
          this.props.onClick();
        }}
      >
        {this.props.text}
      </div>
    );
  }
}
