import { useEffect, useState } from "react";
import { useUnityContext } from "react-unity-webgl";

interface UseUnityGameOptions {
  buildDirPath: string;
  buildName?: string;
  fullscreenKey?: string;
}

export function useUnityGame({ 
  buildDirPath,
  buildName = "Web",
  fullscreenKey = "F" 
}: UseUnityGameOptions) {
  const [isFullScreen, setIsFullscreen] = useState<boolean>(false);

  const buildPathStartFragment = `${buildDirPath}${buildName}`;

  const { 
    unityProvider, 
    loadingProgression, 
    isLoaded, 
    requestFullscreen,
    unload
  } = useUnityContext({
    loaderUrl: buildPathStartFragment + ".loader.js",
    dataUrl: buildPathStartFragment + ".data",
    frameworkUrl: buildPathStartFragment + ".framework.js",
    codeUrl: buildPathStartFragment + ".wasm",
  });

  useEffect(() => {
    function handleFullscreenChange() {
      if (!isLoaded) {
        return;
      }
      setIsFullscreen(!!document.fullscreenElement);
    }

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, [isLoaded]);

  useEffect(() => {
    function handleKeyPress(e: KeyboardEvent) {
      if (e.key.toUpperCase() === fullscreenKey.toUpperCase()) {
        requestFullscreen(!isFullScreen);
      }
    }

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [isFullScreen, requestFullscreen, fullscreenKey]);

  useEffect(() => {
    return () => {
      unload().catch((error) => {
        console.error("Failed to unload Unity instance:", error, " (safe to ignore)");
      });
    };
  }, [unload]);

  return {
    unityProvider,
    loadingProgression,
    isLoaded,
    isFullScreen,
  };
}