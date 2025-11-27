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
    component: () => (
      <div>Internal Disputes Management System Project Details</div>
    ),
    cardMiddle: () => (
      <div
        style={{
          alignSelf: "center",
          backgroundColor: "#ff1f417b",
          width: "100%",
        }}
      >
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/640px-Typescript_logo_2020.svg.png"
            alt="TS logo"
            className="card-image"
          />
        </div>
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            alt="React logo"
            className="card-image"
          />
        </div>
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/fr/thumb/2/2e/Java_Logo.svg/330px-Java_Logo.svg.png?20061227215918"
            alt="Java logo"
            className="card-image"
          />
        </div>
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/79/Spring_Boot.svg"
            alt="Spring logo"
            className="card-image"
          />
        </div>
      </div>
    ),
    borderOutlineColor: "#ff4b1f",
  },
  {
    title: "Azure Cloud Functions for Internal Batch Jobs",
    description:
      "Serverless Azure Cloud Functions for automating internal batch jobs",
    component: () => (
      <div>Azure Cloud Functions for Internal Batch Jobs Project Details</div>
    ),
    cardMiddle: () => (
      <div
        style={{
          alignSelf: "center",
          backgroundColor: "#ff4b1f1b",
          width: "100%",
        }}
      >
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/fr/thumb/2/2e/Java_Logo.svg/330px-Java_Logo.svg.png?20061227215918"
            alt="Java logo"
            className="card-image"
          />
        </div>
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Spring_Framework_Logo_2018.svg/640px-Spring_Framework_Logo_2018.svg.png"
            alt="Spring logo"
            className="card-image"
          />
        </div>
      </div>
    ),
    borderOutlineColor: "#00ddff",
  },
  {
    title: "Internal Fraud Management System",
    description:
      "A fullstack web application for managing internal fraud cases",
    component: () => (
      <div>Internal Fraud Management System Project Details</div>
    ),
    cardMiddle: () => (
      <div
        style={{
          alignSelf: "center",
          backgroundColor: "#ff1f1f63",
          width: "100%",
        }}
      >
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/640px-Typescript_logo_2020.svg.png"
            alt="TS logo"
            className="card-image"
          />
        </div>
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            alt="React logo"
            className="card-image"
          />
        </div>
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/fr/thumb/2/2e/Java_Logo.svg/330px-Java_Logo.svg.png?20061227215918"
            alt="Java logo"
            className="card-image"
          />
        </div>
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/79/Spring_Boot.svg"
            alt="Spring logo"
            className="card-image"
          />
        </div>
      </div>
    ),
    borderOutlineColor: "#1f53ff",
  },
  {
    title: "End-to-End Automated Testing",
    description:
      "An end-to-end automated testing suite for web applications using Puppeteer.js",
    component: () => <div>End-to-End Automated Testing Project Details</div>,
    cardMiddle: () => (
      <div
        style={{
          alignSelf: "center",
          backgroundColor: "#ff9102",
          width: "100%",
        }}
      >
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Javascript_Logo.png/640px-Javascript_Logo.png"
            alt="JavaScript logo"
            className="card-image"
          />
        </div>
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png"
            alt="NodeJS logo"
            className="card-image"
          />
        </div>
        <div>
          <img
            src="https://user-images.githubusercontent.com/10379601/29446482-04f7036a-841f-11e7-9872-91d1fc2ea683.png"
            alt="Puppeteer logo"
            className="card-image"
          />
        </div>
      </div>
    ),
    borderOutlineColor: "#00ff0d",
  },
];

const personalProjectCards: CardInfo[] = [
  {
    title: "N2Engine",
    description:
      "A WIP C++ Game Engine using low-level Graphics and Physics APIs",
    component: N2Engine,
    borderOutlineColor: "#667eea",
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
    borderOutlineColor: "#764ba2",
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
    borderOutlineColor: "#ff6a00",
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
    borderOutlineColor: "#EEE",
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
