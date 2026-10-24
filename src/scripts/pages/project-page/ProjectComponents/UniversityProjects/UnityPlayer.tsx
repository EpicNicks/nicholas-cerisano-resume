import { Unity } from "react-unity-webgl";
import { useUnityGame } from "../../../../hooks/useUnityGame";
import { GameScreen } from "../../../../components/GameScreen";

interface UnityPlayerProps {
  buildDirPath: string;
  buildName?: string;
}

// A playable Unity WebGL build sized to the panel, with load progress, the fullscreen key and a fullscreen button.
export function UnityPlayer({ buildDirPath, buildName }: UnityPlayerProps) {
  const { unityProvider, loadingProgression, isLoaded, toggleFullscreen } = useUnityGame({ buildDirPath, buildName });

  return (
    <>
      <GameScreen onFullscreen={toggleFullscreen}>
        <Unity unityProvider={unityProvider} style={{ aspectRatio: "16 / 10" }} />
      </GameScreen>
      <p>
        {isLoaded ? (
          <b>Press "F" to toggle fullscreen mode for a better experience!</b>
        ) : (
          <>Loading... {Math.round(loadingProgression * 100)}%</>
        )}
      </p>
    </>
  );
}
