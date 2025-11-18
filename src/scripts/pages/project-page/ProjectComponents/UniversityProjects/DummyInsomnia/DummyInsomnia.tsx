import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import "./DummyInsomnia.css";

const unityBuildDirPath =
  process.env.PUBLIC_URL + "/unity/dummy-insomnia/Build/";

export function DummyInsomnia() {
  const { unityProvider, loadingProgression, isLoaded } = useUnityContext({
    loaderUrl: unityBuildDirPath + "Web.loader.js",
    dataUrl: unityBuildDirPath + "Web.data",
    frameworkUrl: unityBuildDirPath + "Web.framework.js",
    codeUrl: unityBuildDirPath + "Web.wasm",
  });
  return (
    <div className="DummyInsomnia">
      <div className="TextContent">
        <h1>Dummy Insomnia</h1>
        <h4>
          A PG 3D Survival Horror Game Prototype created for a group project for
          my University game design class DATT 4300
        </h4>
      </div>
      {!isLoaded && <p>Loading... {Math.round(loadingProgression * 100)}%</p>}
      <Unity
        unityProvider={unityProvider}
        style={{ width: "960px", height: "600px" }}
      />
      <div className="TextContent">
        <p>
          This game was created with the limitation of following the theme of
          "Snooze"
          <br />
          Try your best to escape the factory!
        </p>
      </div>
    </div>
  );
}
