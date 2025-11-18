import React from "react";
import "./About.css";

export function About() {
  return (
    <div className="About">
      <div className="About-Main">
        <div className="About-Body">
          <h1>About Me</h1>
          <p>
            I'm a software developer with over 4 years of experience building
            applications across different areas of the software space. I
            graduated from the Specialized Honors Bachelor of Computer Science
            program at York University, and I approach problems with a pragmatic
            and logical mindset. Beyond work, I enjoy exploring new technologies
            and experimenting with projects that push me to grow as a developer.
          </p>
          <h3>My interests in Software include:</h3>
          <ul>
            <li>Software Architecture and Design</li>
            <li>Full-Stack Web Development</li>
            <li>Game Development and Game Engine Design</li>
            <li>DevOps and Cloud Infrastructure</li>
          </ul>
          <h3>My interests and hobbies include:</h3>
          <ul>
            <li>
              Exploring new frameworks, programming languages, and design
              patterns to gain fresh perspectives on problem solving
            </li>
            <li>Linguistics and languages</li>
            <li>Designing and developing games in Unity Engine</li>
            <li>Practicing Brazilian Jiu-Jitsu</li>
            <li>Chess</li>
            <li>Reading fantasy novels</li>
          </ul>
        </div>
        <div className="About-Image">
          <img
            src={require("../../../../src/media/images/MyPhoto.jpg")}
            alt="My profile"
          />
        </div>
      </div>
    </div>
  );
}
