import { ProjectDetail } from "../../ProjectDetail/ProjectDetail";
import { UnityPlayer } from "../UnityPlayer";

export function InfiniteRunner() {
  return (
    <ProjectDetail
      title="Infinity Run"
      subtitle="A small infinite runner game created for my University game design class DATT 2300"
      media={<UnityPlayer buildDirPath="/unity/infinite-skater/Build/" />}
      tech={["C#", "Unity"]}
      links={[{ label: "View on GitHub", href: "https://github.com/EpicNicks/Infinite-Runner" }]}
    >
      <p>
        Hover your mouse over the screen to charge up and move it away to jump,
        or hold the spacebar to charge up and let go to jump. See how far you
        can make it!
      </p>
    </ProjectDetail>
  );
}
