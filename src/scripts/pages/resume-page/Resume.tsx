import React from "react";
import "./Resume.css";

const resumeLink = require("../../../media/documents/Nicholas Cerisano Resume.pdf");

export function Resume() {
  return (
    <div className="Resume">
      <iframe title="resume" src={resumeLink + "#zoom=125"} />
    </div>
  );
}
