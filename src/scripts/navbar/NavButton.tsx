import React from "react";

interface NavBarMethods {
  setActiveStateId: (id: string) => void;
  getActiveStateId: () => string | null;
  getCurrentSection: () => string;
  setActiveButtonIndex: (index: number) => void;
  handleNavClick: (sectionId: string, event?: React.MouseEvent) => void;
}

interface IProps {
  text: string;
  navBar: NavBarMethods;
  id: Array<string>;
  buttonIndex: number;
  onClick: () => void;
}

export function NavButton({ text, navBar, id, buttonIndex, onClick }: IProps) {
  const currentSection = navBar.getCurrentSection();
  const isActive =
    id.includes(currentSection) ||
    (currentSection === "home" && id.includes(""));

  const className = isActive ? "ActiveNavBtn" : "NavButton";

  const handleClick = () => {
    navBar.setActiveStateId(id[0] || "home");
    navBar.setActiveButtonIndex(buttonIndex);
    onClick();
  };

  return (
    <div className={className} onClick={handleClick}>
      {text}
    </div>
  );
}
