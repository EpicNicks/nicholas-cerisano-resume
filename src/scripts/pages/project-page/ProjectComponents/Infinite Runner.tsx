import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

const unityBuildDirPath =
  process.env.PUBLIC_URL + "/unity/infinite-skater/Build/";

export function InfiniteRunner() {
  const { unityProvider, loadingProgression, isLoaded } = useUnityContext({
    loaderUrl: unityBuildDirPath + "Web.loader.js",
    dataUrl: unityBuildDirPath + "Web.data",
    frameworkUrl: unityBuildDirPath + "Web.framework.js",
    codeUrl: unityBuildDirPath + "Web.wasm",
  });

  return (
    <div className="InfiniteRunner">
      <h1>Infinite Runner</h1>
      {!isLoaded && <p>Loading... {Math.round(loadingProgression * 100)}%</p>}
      <Unity
        unityProvider={unityProvider}
        style={{ width: "960px", height: "600px" }}
      />
    </div>
  );
}
