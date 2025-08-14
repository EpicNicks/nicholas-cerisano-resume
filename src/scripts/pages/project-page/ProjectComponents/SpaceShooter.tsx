import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

const unityBuildDirPath =
  process.env.PUBLIC_URL + "/unity/space-shooter/Build/";

export function SpaceShooter() {
  const { unityProvider, loadingProgression, isLoaded } = useUnityContext({
    loaderUrl: unityBuildDirPath + "Web.loader.js",
    dataUrl: unityBuildDirPath + "Web.data",
    frameworkUrl: unityBuildDirPath + "Web.framework.js",
    codeUrl: unityBuildDirPath + "Web.wasm",
  });

  if (window.navigator.userAgent.indexOf("MSIE ") > -1) {
    alert(
      "This game will not be able to run in Internet Explorer as it does not support WebAssembly"
    );
  }

  return (
    <div className="SpaceShooter">
      <div className="SpaceShooter-content">
        <div className="SpaceShooter-description">
          <h1>Space Shooter</h1>
          <p>
            This is a project I worked on following the Udemy course: Complete
            Unity C# Developer: Learn to code by making games I later designed
            it around being played on a phone and then ported it to web so it
            could be played here. Feel free to give it a try below by clicking
            &lt;Start&gt;.
            <br />
            <br />
            Controls: Move the mouse; your ship (bottom) will move toward it
            along the horizontal axis.
            <br />
            (May take a few seconds to load)
          </p>
        </div>
        <div className="SpaceShooter-game">
          {!isLoaded && (
            <p>Loading... {Math.round(loadingProgression * 100)}%</p>
          )}
          <Unity
            unityProvider={unityProvider}
            style={{ width: "600px", height: "900px" }}
          />
        </div>
      </div>
    </div>
  );
}
