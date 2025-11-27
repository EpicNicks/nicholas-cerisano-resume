import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

const unityBuildDirPath =
  process.env.PUBLIC_URL + "/unity/glitch-garden/Build/";

export function GlitchGarden() {
  const { unityProvider, loadingProgression, isLoaded } = useUnityContext({
    loaderUrl: unityBuildDirPath + "Web.loader.js",
    dataUrl: unityBuildDirPath + "Web.data",
    frameworkUrl: unityBuildDirPath + "Web.framework.js",
    codeUrl: unityBuildDirPath + "Web.wasm",
  });

  return (
    <div className="GlitchGarden">
      <div className="GlitchGardenBGImage" />
      <div>
        <h1>Glitch Garden</h1>
        <p>
          Another game created in the Udemy course: Complete Unity C# Developer:
          Learn to code by making games.
          <br />
          Glitch Garden is a 'Tower' Defence game based on Plants vs Zombies.
          <br />
          The goal is to keep the enemies from making it to the left side of the
          screen.
          <br />
        </p>
        {!isLoaded && <p>Loading... {Math.round(loadingProgression * 100)}%</p>}
        <Unity
          unityProvider={unityProvider}
          style={{ width: "960px", height: "600px" }}
        />
      </div>
    </div>
  );
}
