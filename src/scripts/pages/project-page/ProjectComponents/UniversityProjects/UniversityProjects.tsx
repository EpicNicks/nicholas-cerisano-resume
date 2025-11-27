import React from "react";
import "./UniversityProjects.css";
import { InfiniteRunner } from "./InfiniteRunner/Infinite Runner";
import { NeonBreakGame } from "./NeonBreakGame/NeonBreakGame";
import { DummyInsomnia } from "./DummyInsomnia/DummyInsomnia";
import { ToyMania } from "./ToyMania/ToyMania";
import {
  ExpandableCardGrid,
  CardInfo,
} from "../ExpandingCardGrid/ExpandingCardGrid";

const cards: CardInfo[] = [
  {
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
    title: "Toy Mania",
    description:
      'A puzzle builder game prototype modeled after classic game "The Incredible Machine"',
    component: ToyMania,
    background: "#ffff08",
    cardMiddle: () => (
      <video
        src="/media/videos/Toy Mania clip.mkv"
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
  return (
    <div className="UniversityProjects">
      <h1>University Projects</h1>
      <ExpandableCardGrid cards={cards} className="nested-card-grid" />
    </div>
  );
}
