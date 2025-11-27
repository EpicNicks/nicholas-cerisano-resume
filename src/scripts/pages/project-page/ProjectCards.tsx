import React from "react";
import "./ProjectCards.css";
import { CaloriesIn } from "./ProjectComponents/CaloriesIn/CaloriesIn";
import { NEngineEditor } from "./ProjectComponents/NEngineEditor/NEngineEditor";
import { UniversityProjects } from "./ProjectComponents/UniversityProjects/UniversityProjects";
import { N2Engine } from "./ProjectComponents/N2Engine/N2Engine";
import {
  CardInfo,
  ExpandableCardGrid,
} from "./ProjectComponents/ExpandingCardGrid/ExpandingCardGrid";

const professionalProjectCards: CardInfo[] = [
  {
    title: "Internal Disputes Management System",
    description: "A fullstack web application for managing internal disputes",
    component: () => <div>Internal Case Management System Project Details</div>,
    background: "#ff4b1f",
  },
  {
    title: "Azure Cloud Functions for Internal Batch Jobs",
    description:
      "Serverless Azure Cloud Functions for automating internal batch jobs",
    component: () => (
      <div>Azure Cloud Functions for Internal Batch Jobs Project Details</div>
    ),
    background: "#f9d423",
  },
  {
    title: "Internal Fraud Management System",
    description:
      "A fullstack web application for managing internal fraud cases",
    component: () => (
      <div>Internal Fraud Management System Project Details</div>
    ),
    background: "#1fddff",
  },
  {
    title: "End-to-End Automated Testing",
    description:
      "An end-to-end automated testing suite for web applications using Puppeteer.js",
    component: () => <div>End-to-End Automated Testing Project Details</div>,
    background: "#11998e",
  },
];

const personalProjectCards: CardInfo[] = [
  {
    title: "N2Engine",
    description:
      "A WIP C++ Game Engine using low-level Graphics and Physics APIs",
    component: N2Engine,
    background: "#667eea",
    cardMiddle: () => (
      <div
        style={{
          alignSelf: "center",
          backgroundColor: "#667eea1b",
          width: "100%",
        }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg"
          alt="N2Engine logo"
          className="card-image"
        />
      </div>
    ),
  },
  {
    title: "NEngine Editor",
    description:
      "A C# Game Engine built on SFML and Visual Editor built on WPF",
    component: NEngineEditor,
    background: "#764ba2",
    cardMiddle: () => (
      <div
        style={{
          alignSelf: "center",
          backgroundColor: "#764ba21b",
          width: "100%",
        }}
      >
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Logo_C_sharp.png"
            alt="NEngine logo"
            className="card-image"
          />
        </div>
        <div>
          <img
            src="https://www.sfml-dev.org/download/goodies/sfml-icon-big.png"
            alt="SFML logo"
            className="card-image"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Calories In",
    description: "A Flutter/Dart Calorie Tracking App targeting Android",
    component: CaloriesIn,
    background: "#ff6a00",
    cardMiddle: () => (
      <div
        style={{
          alignSelf: "center",
          backgroundColor: "#ff6a001b",
          width: "100%",
        }}
      >
        <img
          src="https://caloriesin.49385219.xyz/images/calories-in-logo.webp"
          alt="calories in logo"
          className="card-image"
        />
      </div>
    ),
  },
  {
    title: "University Projects",
    description:
      "Projects completed at York University for Game Design classes",
    component: UniversityProjects,
    background: "#EEE",
    cardMiddle: () => (
      <div
        style={{
          alignSelf: "center",
          backgroundColor: "#ffffff1b",
          width: "100%",
        }}
      >
        <img
          src="media/images/unity logo.png"
          alt="Unity logo"
          className="card-image"
        />
      </div>
    ),
  },
];

export default function ProjectCards() {
  return (
    <div className="ProjectCards">
      <div className="ProfessionalProjects">
        <h1>Professional Projects</h1>
        <ExpandableCardGrid
          cards={professionalProjectCards}
          className="professional-projects-card-grid"
        />
      </div>
      <div className="PersonalProjects">
        <h1>Personal Projects</h1>
        <ExpandableCardGrid
          cards={personalProjectCards}
          className="personal-projects-card-grid"
        />
      </div>
    </div>
  );
}
