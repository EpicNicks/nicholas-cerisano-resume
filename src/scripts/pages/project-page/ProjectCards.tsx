import "./ProjectCards.css";
import { CaloriesIn } from "./ProjectComponents/PersonalProjects/CaloriesIn/CaloriesIn";
import { NEngineEditor } from "./ProjectComponents/PersonalProjects/NEngineEditor/NEngineEditor";
import { UniversityProjects } from "./ProjectComponents/UniversityProjects/UniversityProjects";
import { N2Engine } from "./ProjectComponents/PersonalProjects/N2Engine/N2Engine";
import {
  type CardInfo,
  ExpandableCardGrid,
} from "./ProjectComponents/ExpandingCardGrid/ExpandingCardGrid";
import { InternalDisputesManagement } from "./ProjectComponents/ProfessionalProjects/InternalDisputesManagement/InternalDisputesManagement";
import { AzureBatchFunctions } from "./ProjectComponents/ProfessionalProjects/AzureBatchFunctions/AzureBatchFunctions";
import { InternalFraudManagement } from "./ProjectComponents/ProfessionalProjects/InternalFraudManagement/InternalFraudManagement";
import { EndToEndTesting } from "./ProjectComponents/ProfessionalProjects/EndToEndTesting/EndToEndTesting";

import unityLogo from "../../../../src/media/images/unity logo.png";
import typescriptIcon from "../../../../src/media/images/typescript_icon.svg";
import reactIcon from "../../../../src/media/images/react_icon.svg";
import javaIcon from "../../../../src/media/images/java_icon.svg";
import springIcon from "../../../../src/media/images/spring_boot_icon.png";
import nodeJsIcon from "../../../../src/media/images/nodejs_icon.png";
import javascriptIcon from "../../../../src/media/images/javascript_icon.png";
import puppeteerIcon from "../../../../src/media/images/puppeteer_icon.png";
import cppIcon from "../../../../src/media/images/cpp_icon.svg";
import csharpIcon from "../../../../src/media/images/csharp_icon.svg";
import caloriesInLogo from "../../../../src/media/images/calories_in_icon.webp";
import sfmlIcon from "../../../../src/media/images/sfml_icon.svg";

const professionalProjectCards: CardInfo[] = [
  {
    title: "Internal Disputes Management System",
    description: "A fullstack web application for managing internal disputes",
    component: InternalDisputesManagement,
    cardMiddle: () => (
      <div
        style={{
          alignSelf: "center",
          backgroundColor: "#ff1f417b",
          width: "100%",
        }}
      >
        <div>
          <img src={typescriptIcon} alt="TS logo" className="card-image" />
        </div>
        <div>
          <img src={reactIcon} alt="React logo" className="card-image" />
        </div>
        <div>
          <img src={javaIcon} alt="Java logo" className="card-image" />
        </div>
        <div>
          <img src={springIcon} alt="Spring logo" className="card-image" />
        </div>
      </div>
    ),
    borderOutlineColor: "#ff4b1f",
  },
  {
    title: "Azure Cloud Functions for Internal Batch Jobs",
    description:
      "Serverless Azure Cloud Functions for automating internal batch jobs",
    component: AzureBatchFunctions,
    cardMiddle: () => (
      <div
        style={{
          alignSelf: "center",
          backgroundColor: "#00ddff44",
          width: "100%",
        }}
      >
        <div>
          <img src={javaIcon} alt="Java logo" className="card-image" />
        </div>
        <div>
          <img src={springIcon} alt="Spring logo" className="card-image" />
        </div>
      </div>
    ),
    borderOutlineColor: "#00ddff",
  },
  {
    title: "Internal Fraud Management System",
    description:
      "A fullstack web application for managing internal fraud cases",
    component: InternalFraudManagement,
    cardMiddle: () => (
      <div
        style={{
          alignSelf: "center",
          backgroundColor: "#0022ff6f",
          width: "100%",
        }}
      >
        <div>
          <img src={typescriptIcon} alt="TS logo" className="card-image" />
        </div>
        <div>
          <img src={reactIcon} alt="React logo" className="card-image" />
        </div>
        <div>
          <img src={javaIcon} alt="Java logo" className="card-image" />
        </div>
        <div>
          <img src={springIcon} alt="Spring logo" className="card-image" />
        </div>
      </div>
    ),
    borderOutlineColor: "#1f53ff",
  },
  {
    title: "End-to-End Automated Testing",
    description:
      "An end-to-end automated testing suite for web applications using Puppeteer.js",
    component: EndToEndTesting,
    cardMiddle: () => (
      <div
        style={{
          alignSelf: "center",
          backgroundColor: "#17ff02b5",
          width: "100%",
        }}
      >
        <div>
          <img
            src={javascriptIcon}
            alt="JavaScript logo"
            className="card-image"
          />
        </div>
        <div>
          <img src={nodeJsIcon} alt="NodeJS logo" className="card-image" />
        </div>
        <div>
          <img
            src={puppeteerIcon}
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
        <img src={cppIcon} alt="N2Engine logo" className="card-image" />
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
          <img src={csharpIcon} alt="NEngine logo" className="card-image" />
        </div>
        <div>
          <img src={sfmlIcon} alt="SFML logo" className="card-image" />
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
          src={caloriesInLogo}
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
        <img src={unityLogo} alt="Unity logo" className="card-image" />
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
