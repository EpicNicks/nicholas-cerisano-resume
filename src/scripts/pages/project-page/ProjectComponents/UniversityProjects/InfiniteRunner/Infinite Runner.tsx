import React from "react";
import { Unity } from "react-unity-webgl";
import "./InfiniteRunner.css";
import { useUnityGame } from "scripts/hooks/useUnityGame";

const unityBuildDirPath =
  process.env.PUBLIC_URL + "/unity/infinite-skater/Build/";

export function InfiniteRunner() {
  const { unityProvider, loadingProgression, isLoaded } = useUnityGame({
    buildDirPath: unityBuildDirPath,
  });

  return (
    <div className="InfiniteRunner">
      <div className="TextContent">
        <h1>Infinity Run</h1>
        <h4>
          A small infinite runner game created for my University game design
          class DATT 2300
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
          <b>
            Hover your mouse over the screen to charge up and remove it to jump.
          </b>
          <br />
          <b>
            <i>Alternatively</i>
          </b>
          , <b>hold the spacebar to charge up and let go to jump.</b>
          <br />
          See how far you can make it!
        </p>
      </div>
    </div>
  );
}
