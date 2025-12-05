import "./UniversityProjects.css";
import { InfiniteRunner } from "./InfiniteRunner/Infinite Runner";
import { NeonBreakGame } from "./NeonBreakGame/NeonBreakGame";
import { DummyInsomnia } from "./DummyInsomnia/DummyInsomnia";
import { ToyMania } from "./ToyMania/ToyMania";
import {
  ExpandableCardGrid,
  type CardInfo,
} from "../ExpandingCardGrid/ExpandingCardGrid";

import neonBreakTitleScreen from "../../../../../media/videos/neon break title screen.mp4";
import dummyInsomniaClip from "../../../../../media/videos/Dummy Insomnia clip.mp4";
import infiniteRunnerClip from "../../../../../media/videos/Infinite Runner clip.mp4";
import toyManiaClip from "../../../../../media/videos/Toy Mania clip.mp4";

const cards: CardInfo[] = [
  {
    title: "Neon Break",
    description: "A 2D Vectorheart Style Top-Down Shooter made in Unity",
    component: NeonBreakGame,
    borderOutlineColor: "#43ceb7",
    cardMiddle: () => (
      <video
        src={neonBreakTitleScreen}
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
    title: "Dummy Insomnia",
    description: "A 3D PG Survival Horror Game Prototype made in Unity",
    component: DummyInsomnia,
    borderOutlineColor: "#001100",
    cardMiddle: () => (
      <video
        src={dummyInsomniaClip}
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
    title: "Toy Mania",
    description:
      'A puzzle builder game prototype modeled after classic game "The Incredible Machine"',
    component: ToyMania,
    borderOutlineColor: "#ffff08",
    cardMiddle: () => (
      <video
        src={toyManiaClip}
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
    title: "Infinity Run",
    description: "A 2D Infinite Runner game made in Unity using C#",
    component: InfiniteRunner,
    borderOutlineColor: "#ff7e5f",
    cardMiddle: () => (
      <video
        src={infiniteRunnerClip}
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
  return (
    <div className="UniversityProjects">
      <h1>University Projects</h1>
      <ExpandableCardGrid cards={cards} className="nested-card-grid" />
    </div>
  );
}
