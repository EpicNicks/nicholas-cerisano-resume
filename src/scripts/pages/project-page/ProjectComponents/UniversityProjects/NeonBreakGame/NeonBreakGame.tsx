import { ProjectDetail } from "../../ProjectDetail/ProjectDetail";
import { UnityPlayer } from "../UnityPlayer";

export function NeonBreakGame() {
  return (
    <ProjectDetail
      title="Neon Break"
      subtitle="A top-down action game created as the final group project for my University game design class DATT 4300"
      media={<UnityPlayer buildDirPath="/unity/vectorheart-game/Build/" buildName="Builds" />}
      tech={["C#", "Unity"]}
      links={[{ label: "Play on itch.io", href: "https://avanic-insanity.itch.io/neon-break" }]}
    >
      <p>
        Controls are in the options menu, reached from the main menu. See how
        long you can withstand the neon onslaught!
      </p>
    </ProjectDetail>
  );
}
