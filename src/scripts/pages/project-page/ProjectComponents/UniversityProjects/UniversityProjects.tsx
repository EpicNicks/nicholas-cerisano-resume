import "./UniversityProjects.css";
import { ProjectDetail } from "../ProjectDetail/ProjectDetail";
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
    description: "A 2D Vectorheart-style top-down shooter made in Unity.",
    component: NeonBreakGame,
    year: 2019,
    borderOutlineColor: "#43ceb7",
    languages: ["C#"],
    tools: ["Unity"],
    footer: "Playable in the browser",
    media: { video: neonBreakTitleScreen },
  },
  {
    title: "Dummy Insomnia",
    description: "A 3D PG survival horror game prototype made in Unity.",
    component: DummyInsomnia,
    year: 2019,
    // A dark green: the original #001100 disappeared against the dark panel.
    borderOutlineColor: "#3f8f4a",
    languages: ["C#"],
    tools: ["Unity"],
    footer: "Gameplay video",
    media: { video: dummyInsomniaClip },
  },
  {
    title: "Toy Mania",
    description: "A puzzle builder prototype modeled after the classic “The Incredible Machine”.",
    component: ToyMania,
    year: 2019,
    borderOutlineColor: "#ffff08",
    lightOutlineColor: "#c9b800",
    languages: ["C#"],
    tools: ["Unity"],
    footer: "Playable in the browser",
    media: { video: toyManiaClip },
  },
  {
    title: "Infinity Run",
    description: "A 2D infinite runner game made in Unity using C#.",
    component: InfiniteRunner,
    year: 2019,
    borderOutlineColor: "#ff7e5f",
    languages: ["C#"],
    tools: ["Unity"],
    footer: "Playable in the browser",
    media: { video: infiniteRunnerClip },
  },
];

export function UniversityProjects() {
  return (
    <ProjectDetail
      title="University Projects"
      subtitle="Four games built for York University's game design classes"
      tech={["C#", "Unity"]}
      footer={<ExpandableCardGrid cards={cards} className="nested-card-grid" />}
    >
      <p>Open a game to see it in action.</p>
    </ProjectDetail>
  );
}
