import React, { useState } from "react";
import { CardInfo } from "../../ProjectCards";
import { AnimatePresence, motion } from "framer-motion";
import "./UniversityProjects.css";
import { InfiniteRunner } from "../Infinite Runner";
import { NeonBreakGame } from "./NeonBreakGame";

const cards: CardInfo[] = [
  {
    id: 10,
    title: "Neon Break",
    description: "A 2D Vector Art Style Top-Down Shooter made in Unity",
    component: NeonBreakGame,
    background: "#43cea2",
  },
  {
    id: 14,
    title: "Infinity Run",
    description: "A 2D Infinite Runner game made in Unity using C#",
    component: InfiniteRunner,
    background: "#ff7e5f",
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
