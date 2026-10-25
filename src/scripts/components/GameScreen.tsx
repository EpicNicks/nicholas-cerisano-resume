import React, { useEffect, useRef, useState } from "react";
import { MdFullscreen } from "react-icons/md";
import "./GameScreen.css";

const OVERLAY_MS = 5000;

interface GameScreenProps {
  onFullscreen: () => void;
  children: React.ReactNode;
}

// A playable demo with a fullscreen button over its bottom-right corner. The overlay shows when the mouse
// comes onto the screen and fades out after five seconds so it stays out of the way while playing; moving
// off and back on brings it back. Mouse moves inside an iframe never reach this page, so entering and
// leaving are the only signals there are. Keyboard focus on the button also shows it.
export function GameScreen({ onFullscreen, children }: GameScreenProps) {
  const [visible, setVisible] = useState(false);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const show = () => {
    setVisible(true);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setVisible(false), OVERLAY_MS);
  };

  const hide = () => {
    window.clearTimeout(timer.current);
    setVisible(false);
  };

  return (
    <div className="game-screen" onMouseEnter={show} onMouseLeave={hide}>
      {children}
      <div className={`game-screen-overlay${visible ? " is-visible" : ""}`}>
        <button type="button" className="game-screen-fullscreen" onClick={onFullscreen} title="Fullscreen (F)">
          <MdFullscreen aria-hidden="true" />
          <span>Fullscreen</span>
          <kbd>F</kbd>
        </button>
      </div>
    </div>
  );
}
