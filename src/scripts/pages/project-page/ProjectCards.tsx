import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./ProjectCards.css";
import { CaloriesIn } from "./ProjectComponents/CaloriesIn/CaloriesIn";
import { NEngineEditor } from "./ProjectComponents/NEngineEditor/NEngineEditor";
import { UniversityProjects } from "./ProjectComponents/UniversityProjects/UniversityProjects";
import { N2Engine } from "./ProjectComponents/N2Engine/N2Engine";

export type CardInfo = {
  id: number;
  title: string;
  description: string;
  component: React.FC;
  background?: string;
  cardMiddle?: React.FC;
};

const cards: CardInfo[] = [
  {
    id: 1,
    title: "N2Engine",
    description:
      "A WIP C++ Game Engine using low-level Graphics and Physics APIs",
    component: N2Engine,
    background: "#667eea",
    cardMiddle: () => (
      <div style={{ alignSelf: "center" }}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg"
          alt="N2Engine logo"
          className="card-image"
        />
      </div>
    ),
  },
  {
    id: 2,
    title: "NEngine Editor",
    description:
      "A C# Game Engine built on SFML and Visual Editor built on WPF",
    component: NEngineEditor,
    background: "#764ba2",
    cardMiddle: () => (
      <div>
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
    id: 3,
    title: "Calories In",
    description: "A Flutter/Dart Calorie Tracking App targeting Android",
    component: CaloriesIn,
    background: "#ff6a00",
    cardMiddle: () => (
      <div style={{ alignSelf: "center" }}>
        <img
          src="https://caloriesin.49385219.xyz/images/calories-in-logo.webp"
          alt="calories in logo"
          className="card-image"
        />
      </div>
    ),
  },
  {
    id: 4,
    title: "University Projects",
    description:
      "Projects completed at York University for Game Design classes",
    component: UniversityProjects,
    background: "#EEE",
  },
];

export default function ExpandingCardGrid() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const ExpandedComponent =
    expandedId !== null
      ? cards.find((c) => c.id === expandedId)!.component
      : null;

  return (
    <div className="card-grid">
      {cards.map((card) => (
        <motion.div
          key={card.id}
          layoutId={`card-${card.id}`}
          className="card"
          style={{ borderColor: card.background, textAlign: "left" }}
          onClick={() => setExpandedId(card.id)}
          whileHover={{
            scale: expandedId ? 1 : 1.05,
            boxShadow: `inset 0 0 8px 6px ${card.background ?? "transparent"}`,
            transition: {
              scale: { duration: 0.15, ease: "easeOut" },
              boxShadow: { duration: 0.08, ease: "linear" },
            },
          }}
        >
          <h3>{card.title}</h3>
          {card.cardMiddle &&
            (() => {
              const CardMiddle = card.cardMiddle;
              return <CardMiddle />;
            })()}
          <p>{card.description}</p>
        </motion.div>
      ))}

      {/* EXPANDED OVERLAY */}
      <AnimatePresence initial={false}>
        {expandedId && (
          <motion.div
            className="expanded-frame"
            onClick={() => setExpandedId(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="expanded-content"
              layoutId={`card-${expandedId}`}
              onClick={(e) => e.stopPropagation()}
            >
              {ExpandedComponent && <ExpandedComponent />}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
