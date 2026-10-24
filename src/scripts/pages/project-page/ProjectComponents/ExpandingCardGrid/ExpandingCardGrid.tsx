import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePreventBodyScroll } from "../../../../hooks/useModalPreventBodyScrolling";
import { useTheme } from "../../../../theme/ThemeContext";
import { techIcons } from "../../techIcons";
import "./ExpandingCardGrid.css";

export type CardInfo = {
  title: string;
  description: string;
  component: React.FC;
  borderOutlineColor?: string;
  /** Outline colour on the light theme, for colours that wash out on white (near-white, neon green). */
  lightOutlineColor?: string;
  languages?: string[];
  tools?: string[];
  /** Short line at the foot of the card: a headline result or the project's status. */
  footer?: string;
  /** Opens in a wider panel, for details that hold their own card grid. */
  wide?: boolean;
  /** Shown at the top of the card in place of the stack logos. */
  media?: { video?: string; image?: string };
};

interface ExpandableCardGridProps {
  cards: CardInfo[];
  className: string;
}

// The card's clip, image or stack logos, with its language and tool chips sliding in over it on hover.
function CardTop({ card }: { card: CardInfo }) {
  const tech = [...(card.languages ?? []), ...(card.tools ?? [])];
  const chips = tech.slice(0, 8);
  // One logo per icon: Azure and Azure Functions share one.
  const icons = [...new Map(tech.filter((t) => techIcons[t]).map((t) => [techIcons[t].Icon, t])).values()].slice(0, 8);

  let face: React.ReactNode;
  if (card.media?.video) {
    face = <video src={card.media.video} autoPlay loop muted playsInline aria-hidden="true" />;
  } else if (card.media?.image) {
    face = <img src={card.media.image} alt="" />;
  } else {
    face = (
      <div
        className="card-icons"
        style={{ "--n": icons.length, "--cols": Math.ceil(icons.length / 2) } as React.CSSProperties}
      >
        {icons.map((name) => {
          const { Icon, color } = techIcons[name];
          return (
            <span className="card-icon" key={name} title={name} style={{ "--brand": color } as React.CSSProperties}>
              <Icon color={color} aria-hidden="true" />
            </span>
          );
        })}
      </div>
    );
  }

  return (
    <div className={`card-top${card.media ? " card-top-media" : ""}`}>
      {face}
      <div className="card-chips">
        {chips.map((chip, i) => (
          <span className="card-chip" key={chip} style={{ "--i": i } as React.CSSProperties}>
            {chip}
          </span>
        ))}
      </div>
    </div>
  );
}

export function ExpandableCardGrid({
  cards,
  className,
}: ExpandableCardGridProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const zIndex = usePreventBodyScroll(expandedId !== null);
  const { theme } = useTheme();
  const outlineColor = (card: CardInfo) =>
    (theme === "light" ? card.lightOutlineColor : undefined) ?? card.borderOutlineColor;

  const idFromCard = (card: CardInfo) => `${className}-${card.title}`;

  const expandedCard =
    expandedId !== null ? cards.find((c) => idFromCard(c) === expandedId) : undefined;
  const ExpandedComponent = expandedCard?.component ?? null;

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedId(null);
  };

  return (
    <div className={`card-grid ${className || ""}`}>
      {cards.map((card) => (
        <motion.div
          key={idFromCard(card)}
          layoutId={idFromCard(card)}
          className="card"
          role="button"
          tabIndex={0}
          aria-label={`${card.title}: open details`}
          style={
            {
              "--c-dark": card.borderOutlineColor ?? "#888",
              "--c-light": card.lightOutlineColor ?? card.borderOutlineColor ?? "#888",
            } as React.CSSProperties
          }
          onClick={() => setExpandedId(idFromCard(card))}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setExpandedId(idFromCard(card));
            }
          }}
          whileHover={{
            scale: expandedId ? 1 : 1.05,
            boxShadow: `inset 0 0 8px 6px ${outlineColor(card) ?? "transparent"}`,
            transition: {
              scale: { duration: 0.15, ease: "easeOut" },
              boxShadow: { duration: 0.08, ease: "linear" },
            },
          }}
        >
          <CardTop card={card} />
          <div className="card-text">
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            {card.footer && <div className="card-footer">{card.footer}</div>}
          </div>
        </motion.div>
      ))}

      <AnimatePresence initial={false}>
        {expandedId && (
          <motion.div
            className="expanded-frame"
            style={{ zIndex }}
            onClick={handleClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className={`expanded-content${expandedCard?.wide ? " expanded-content-wide" : ""}`}
              layoutId={expandedId}
              style={{ "--c": (expandedCard && outlineColor(expandedCard)) ?? "#888" } as React.CSSProperties}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="close-button"
                onClick={handleClose}
                aria-label="Close"
                type="button"
              >
                ×
              </button>
              {ExpandedComponent && <ExpandedComponent />}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
