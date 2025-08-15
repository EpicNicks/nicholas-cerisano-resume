import React from "react";
import "./Sidebar.css";
import { ProjectId } from "../Projects";

interface SideButtonProps {
  text: string;
  id: ProjectId;
  isActive: boolean;
  onClick: (id: ProjectId) => void;
}

export function SideButton({ text, id, isActive, onClick }: SideButtonProps) {
  const className = isActive ? "ActiveSideButton" : "SideButton";

  return (
    <div className={`${className} ${id}`} onClick={() => onClick(id)}>
      {text}
    </div>
  );
}
