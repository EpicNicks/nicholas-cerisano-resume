import { Unity } from "react-unity-webgl";
import { useUnityGame } from "../../../../hooks/useUnityGame";

interface UnityPlayerProps {
  buildDirPath: string;
  buildName?: string;
}

// A playable Unity WebGL build sized to the panel, with load progress and the fullscreen key.
export function UnityPlayer({ buildDirPath, buildName }: UnityPlayerProps) {
  const { unityProvider, loadingProgression, isLoaded } = useUnityGame({ buildDirPath, buildName });

  return (
    <>
      <Unity
        unityProvider={unityProvider}
        style={{ display: "block", width: "100%", aspectRatio: "16 / 10", borderRadius: 10, background: "#000" }}
      />
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
