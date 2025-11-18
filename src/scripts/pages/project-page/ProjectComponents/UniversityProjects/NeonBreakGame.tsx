import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

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
    <div className="UniversityProjects">
      {!isLoaded && <p>Loading... {Math.round(loadingProgression * 100)}%</p>}
      <Unity
        unityProvider={unityProvider}
        style={{ width: "960px", height: "600px" }}
      />
    </div>
  );
}
