import React, { useState } from "react";
import { CardInfo } from "../../ProjectCards";
import { AnimatePresence, motion } from "framer-motion";
import "./UniversityProjects.css";
import { InfiniteRunner } from "./InfiniteRunner/Infinite Runner";
import { NeonBreakGame } from "./NeonBreakGame/NeonBreakGame";
import { DummyInsomnia } from "./DummyInsomnia/DummyInsomnia";
import { ToyMania } from "./ToyMania/ToyMania";

const cards: CardInfo[] = [
  {
    id: 10,
    title: "Neon Break",
    description: "A 2D Vectorheart Style Top-Down Shooter made in Unity",
    component: NeonBreakGame,
    background: "#43ceb7",
    cardMiddle: () => (
      <video
        src="/media/videos/neon break title screen.mkv"
        autoPlay
        loop
        muted
        playsInline
        style={{
          width: "100%",
          height: "auto",
          borderRadius: "4px",
          marginBottom: "12px",
        }}
      />
    ),
  },
  {
    id: 11,
    title: "Dummy Insomnia",
    description: "A 3D PG Survival Horror Game Prototype made in Unity",
    component: DummyInsomnia,
    background: "#001100",
    cardMiddle: () => (
      <video
        src="/media/videos/Dummy Insomnia clip.mkv"
        autoPlay
        loop
        muted
        playsInline
        style={{
          width: "100%",
          height: "auto",
          borderRadius: "4px",
          marginBottom: "12px",
        }}
      />
    ),
  },
  {
    id: 12,
    title: "Toy Mania",
    description:
      'A puzzle builder game prototype modeled after classic game "The Incredible Machine"',
    component: ToyMania,
    background: "#ffff08",
  },
  {
    id: 13,
    title: "Infinity Run",
    description: "A 2D Infinite Runner game made in Unity using C#",
    component: InfiniteRunner,
    background: "#ff7e5f",
    cardMiddle: () => (
      <video
        src="/media/videos/Infinite Runner clip.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{
          width: "100%",
          height: "auto",
          borderRadius: "4px",
          marginBottom: "12px",
        }}
      />
    ),
  },
];

export function UniversityProjects() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const ExpandedComponent =
    expandedId !== null
      ? cards.find((c) => c.id === expandedId)!.component
      : null;

  return (
    <div className="nested-card-grid">
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
          <div className="UniversityProjectCard">
            <h3>{card.title}</h3>
            {card.cardMiddle &&
              (() => {
                const CardMiddle = card.cardMiddle;
                return <CardMiddle />;
              })()}
            <p>{card.description}</p>
          </div>
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
