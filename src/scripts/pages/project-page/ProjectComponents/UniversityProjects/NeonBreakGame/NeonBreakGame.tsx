import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import "./NeonBreakGame.css";

// todo:
// a stack of cards or otherwise array of cards that display the project
// when hovered, flips the card
// when clicked opens the unity component
const unityBuildDirPath =
  process.env.PUBLIC_URL + "/unity/vectorheart-game/Build/";

export function NeonBreakGame() {
  const { unityProvider, loadingProgression, isLoaded } = useUnityContext({
    loaderUrl: unityBuildDirPath + "Builds.loader.js",
    dataUrl: unityBuildDirPath + "Builds.data",
    frameworkUrl: unityBuildDirPath + "Builds.framework.js",
    codeUrl: unityBuildDirPath + "Builds.wasm",
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
        style={{ width: "960px", height: "600px" }}
      />
      <div className="TextContent">
        <p>
          <b>Controls are in the options menu accessible from the main menu.</b>
          <br />
          See how long you can withstand the neon onslaught!
        </p>
      </div>
    </div>
  );
}
