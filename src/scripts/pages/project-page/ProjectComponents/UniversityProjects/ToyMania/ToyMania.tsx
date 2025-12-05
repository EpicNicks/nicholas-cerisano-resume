import { Unity } from "react-unity-webgl";
import { useUnityGame } from "../../../../../hooks/useUnityGame";
import "./ToyMania.css";

const unityBuildDirPath = "/unity/toy-mania/Build/";

export function ToyMania() {
  const { unityProvider, loadingProgression, isLoaded } = useUnityGame({
    buildDirPath: unityBuildDirPath,
    buildName: "Web",
  });

  return (
    <div className="ToyMania">
      <div className="TextContent">
        <h1>Toy Mania</h1>
        <h4>
          A puzzle builder game prototype created for a group project for my
          University game design class DATT 4300 modeled after classic game "The
          Incredible Machine"
        </h4>
      </div>
      {!isLoaded && <p>Loading... {Math.round(loadingProgression * 100)}%</p>}
      <Unity
        unityProvider={unityProvider}
        style={{ width: "960px", height: "600px", maxWidth: "100%" }}
      />
      <div className="TextContent">
        <p style={{ textAlign: "center" }}>
          <b>Press "F" to toggle fullscreen mode for a better experience!</b>
        </p>
      </div>
    </div>
  );
}
