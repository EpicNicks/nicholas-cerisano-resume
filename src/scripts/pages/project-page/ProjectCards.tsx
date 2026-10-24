import "./ProjectCards.css";
import { useMemo, useState } from "react";
import { CaloriesIn } from "./ProjectComponents/PersonalProjects/CaloriesIn/CaloriesIn";
import { NEngineEditor } from "./ProjectComponents/PersonalProjects/NEngineEditor/NEngineEditor";
import { PersianPhoneticIME } from "./ProjectComponents/PersonalProjects/PersianPhoneticIME/PersianPhoneticIME";
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
import { TechFilter, type TechCount } from "./TechFilter";

import caloriesInLogo from "../../../../src/media/images/calories_in_icon.webp";
import persianImeSite from "../../../../src/media/images/persian_phonetic_ime_site.png";

const professionalProjectCards: CardInfo[] = [
  {
    title: "Internal Disputes Management System",
    description: "A fullstack web application for managing internal disputes",
    component: InternalDisputesManagement,
    borderOutlineColor: "#ff4b1f",
    languages: ["TypeScript", "Java"],
    tools: ["React", "Redux Toolkit", "Spring Boot", "REST API", "MS SQL Server", "Azure", "Docker", "Jest", "JUnit"],
    footer: "+15% cases resolved per week",
  },
  {
    title: "Azure Cloud Functions for Internal Batch Jobs",
    description: "Serverless Azure Cloud Functions for automating internal batch jobs",
    component: AzureBatchFunctions,
    borderOutlineColor: "#00ddff",
    lightOutlineColor: "#00a6c7",
    languages: ["Java"],
    tools: ["Spring Boot", "Azure Functions", "Durable Functions", "MS SQL Server", "JUnit"],
    footer: "−60% incidents per month",
  },
  {
    title: "Internal Fraud Management System",
    description: "A fullstack web application for managing internal fraud cases",
    component: InternalFraudManagement,
    borderOutlineColor: "#1f53ff",
    languages: ["TypeScript", "Java"],
    tools: ["React", "Redux Toolkit", "Spring Boot", "REST API", "MS SQL Server", "Azure", "Jest", "JUnit"],
    footer: "99.99% uptime, up from 99.5%",
  },
  {
    title: "End-to-End Automated Testing",
    description: "An end-to-end automated testing suite for web applications using Puppeteer.js",
    component: EndToEndTesting,
    borderOutlineColor: "#00ff0d",
    lightOutlineColor: "#16b322",
    languages: ["JavaScript"],
    tools: ["Node.js", "Puppeteer", "Jest", "ReadyAPI", "CI/CD"],
    footer: "2 days → 2 h regression testing",
  },
];

const personalProjectCards: CardInfo[] = [
  {
    title: "N2Engine",
    description: "A WIP C++ Game Engine using low-level Graphics and Physics APIs",
    component: N2Engine,
    borderOutlineColor: "#667eea",
    languages: ["C++", "Lua"],
    tools: ["OpenGL", "NVIDIA PhysX", "WebAssembly"],
    footer: "Playable web demo",
  },
  {
    title: "NEngine Editor",
    description: "A C# Game Engine built on SFML and Visual Editor built on WPF",
    component: NEngineEditor,
    borderOutlineColor: "#764ba2",
    languages: ["C#"],
    tools: ["SFML.NET", "WPF", "MVVM"],
  },
  {
    title: "Calories In",
    description: "A Flutter/Dart Calorie Tracking App targeting Android",
    component: CaloriesIn,
    borderOutlineColor: "#ff6a00",
    languages: ["Dart", "Kotlin"],
    tools: ["Flutter", "SQLite"],
    footer: "On Google Play",
    media: { image: caloriesInLogo },
  },
  {
    title: "Persian Phonetic IME",
    description: "A Windows input method that turns Latin letters into Persian script as you type",
    component: PersianPhoneticIME,
    borderOutlineColor: "#e8a317",
    lightOutlineColor: "#c98a06",
    languages: ["Rust"],
    tools: ["Windows TSF"],
    footer: "Pre-release",
    media: { image: persianImeSite },
  },
  {
    title: "University Projects",
    description: "Projects completed at York University for Game Design classes",
    component: UniversityProjects,
    borderOutlineColor: "#EEE",
    lightOutlineColor: "#8a8f98",
    // The four games inside share this stack, so the filter finds them through this card.
    languages: ["C#"],
    tools: ["Unity"],
    footer: "4 games",
  },
];

const usesTech = (card: CardInfo, tech: string) =>
  (card.languages ?? []).includes(tech) || (card.tools ?? []).includes(tech);

// Every language and tool across both sections, most-used first.
function countTech(cards: CardInfo[], key: "languages" | "tools"): TechCount[] {
  const names = [...new Set(cards.flatMap((card) => card[key] ?? []))];
  return names
    .map((name) => ({ name, count: cards.filter((card) => usesTech(card, name)).length }))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
}

export default function ProjectCards() {
  const [activeTech, setActiveTech] = useState<string | null>(null);

  const { languages, tools } = useMemo(() => {
    const all = [...professionalProjectCards, ...personalProjectCards];
    return { languages: countTech(all, "languages"), tools: countTech(all, "tools") };
  }, []);

  const visible = (cards: CardInfo[]) =>
    activeTech === null ? cards : cards.filter((card) => usesTech(card, activeTech));
  const professional = visible(professionalProjectCards);
  const personal = visible(personalProjectCards);

  return (
    <div className="ProjectCards">
      <div className="ProjectsIntro">
        <h1>Projects</h1>
        <p>Open any card for the full story. Filter by the language or tool you're interested in.</p>
        <TechFilter languages={languages} tools={tools} active={activeTech} onChange={setActiveTech} />
      </div>

      <div className="ProfessionalProjects">
        <div className="ProjectGroupHeader">
          <h2>Professional Projects</h2>
          <span>Built at Moneris</span>
        </div>
        {professional.length > 0 ? (
          <ExpandableCardGrid cards={professional} className="professional-projects-card-grid" />
        ) : (
          <p className="ProjectsEmpty">None of the professional projects use {activeTech}.</p>
        )}
      </div>

      <div className="PersonalProjects">
        <div className="ProjectGroupHeader">
          <h2>Personal Projects</h2>
          <span>Engines, apps, tools and games built on my own time</span>
        </div>
        {personal.length > 0 ? (
          <ExpandableCardGrid cards={personal} className="personal-projects-card-grid" />
        ) : (
          <p className="ProjectsEmpty">None of the personal projects use {activeTech}.</p>
        )}
      </div>
    </div>
  );
}
