import { ProjectDetail } from "../../ProjectDetail/ProjectDetail";
import { UnityPlayer } from "../UnityPlayer";

export function ToyMania() {
  return (
    <ProjectDetail
      title="Toy Mania"
      subtitle={'A puzzle builder game prototype created for a group project for my University game design class DATT 4300, modeled after the classic "The Incredible Machine"'}
      media={<UnityPlayer buildDirPath="/unity/toy-mania/Build/" buildName="Web" />}
      tech={["C#", "Unity"]}
      links={[{ label: "Play on itch.io", href: "https://avanic-insanity.itch.io/toy-mania" }]}
    >
      <p>Place moving objects in each puzzle level to guide the ball to the goal.</p>
    </ProjectDetail>
  );
}
