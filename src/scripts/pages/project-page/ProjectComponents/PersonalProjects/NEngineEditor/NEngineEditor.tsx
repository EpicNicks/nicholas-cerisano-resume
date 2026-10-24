import { ProjectDetail } from "../../ProjectDetail/ProjectDetail";

export function NEngineEditor() {
  return (
    <ProjectDetail
      title="NEngine Editor"
      subtitle="A game engine editor built with C# and WPF"
      pointsHeading="Key Features"
      points={[
        ["Scene view", "A 2D view for placing and manipulating game objects. Scenes are JSON of C# object properties read through reflection and applied when the engine deserializes them"],
        ["Hierarchy", "Every game object in the scene"],
        ["Inspector", "Serialized properties of the selected object"],
        ["Asset browser", "Every file in the project"],
      ]}
      tech={["C#", "SFML.NET", "WPF", "MVVM"]}
      links={[{ label: "View on GitHub", href: "https://github.com/EpicNicks/NEngineEditor" }]}
    >
      <p>
        NEngine Editor builds scenes for NEngine, a game engine I first
        developed with SFML as the graphics library. I built both to learn game
        engine architecture and design patterns, and to sharpen my C# and WPF.
      </p>
    </ProjectDetail>
  );
}
