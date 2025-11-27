import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./ExpandingCardGrid.css";

export type CardInfo = {
  title: string;
  description: string;
  component: React.FC;
  borderOutlineColor?: string;
  cardMiddle?: React.FC;
};

interface ExpandableCardGridProps {
  cards: CardInfo[];
  className: string;
}

export function ExpandableCardGrid({
  cards,
  className,
}: ExpandableCardGridProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const idFromCard = (card: CardInfo, index: number) =>
    `${className}-${card.title}-${index}`;

  const ExpandedComponent =
    expandedId !== null
      ? cards.find((c) => expandedId !== null && expandedId.includes(c.title))!
          .component
      : null;

  return (
    <div className={`card-grid ${className || ""}`}>
      {cards.map((card, index) => (
        <motion.div
          key={`${className}-${index}`}
          layoutId={idFromCard(card, index)}
          className="card"
          style={{ borderColor: card.borderOutlineColor, textAlign: "left" }}
          onClick={() => setExpandedId(idFromCard(card, index))}
          whileHover={{
            scale: expandedId ? 1 : 1.05,
            boxShadow: `inset 0 0 8px 6px ${
              card.borderOutlineColor ?? "transparent"
            }`,
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
