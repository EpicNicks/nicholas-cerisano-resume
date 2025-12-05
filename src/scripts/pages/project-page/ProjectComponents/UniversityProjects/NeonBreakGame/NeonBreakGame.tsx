import { Unity } from "react-unity-webgl";
import "./NeonBreakGame.css";
import { useUnityGame } from "../../../../../hooks/useUnityGame";

const unityBuildDirPath = "/unity/vectorheart-game/Build/";

export function NeonBreakGame() {
  const { unityProvider, loadingProgression, isLoaded } = useUnityGame({
    buildDirPath: unityBuildDirPath,
    buildName: "Builds",
  });
  return (
    <div className="NeonBreakGame">
      <div className="TextContent">
        <h1>Neon Break</h1>
        <h4>
          A top-down action game created as the final group project for my
          University game design class DATT 4300
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
        <p>
          <b>Controls are in the options menu accessible from the main menu.</b>
          <br />
          See how long you can withstand the neon onslaught!
        </p>
      </div>
    </div>
  );
}
