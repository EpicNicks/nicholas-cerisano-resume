import { useEffect, useRef, type RefObject } from "react";
import { ProjectDetail } from "../../ProjectDetail/ProjectDetail";
import { GameScreen } from "../../../../../components/GameScreen";

const DEMO_URL = "/n2engine/index.html";

function toggleFullscreen(frame: HTMLIFrameElement) {
  const request = document.fullscreenElement === frame ? document.exitFullscreen() : frame.requestFullscreen();
  request.catch(() => {
    // Fullscreen can be refused (no user activation, or blocked by the browser); nothing to do.
  });
}

// F toggles fullscreen on the demo, like the Unity games. The demo doesn't bind F itself (its controls
// are WASD, the arrows, numbers and a few letters), and it is same-origin, so key presses made while
// it has focus can be heard from here without touching the engine build.
function useFullscreenKey(frameRef: RefObject<HTMLIFrameElement | null>) {
  useEffect(() => {
    const frame = frameRef.current;
    if (frame === null) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() !== "f" || e.repeat || e.ctrlKey || e.metaKey || e.altKey) return;
      const target = e.target as HTMLElement | null;
      if (target && (target.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName))) return;
      toggleFullscreen(frame);
    };

    // The demo's own window gets the key presses while it has focus; re-attach whenever it (re)loads.
    let demoWindow: Window | null = null;
    const attachToDemo = () => {
      demoWindow?.removeEventListener("keydown", handleKey);
      demoWindow = frame.contentWindow;
      demoWindow?.addEventListener("keydown", handleKey);
    };

    window.addEventListener("keydown", handleKey);
    frame.addEventListener("load", attachToDemo);
    attachToDemo();
    return () => {
      window.removeEventListener("keydown", handleKey);
      frame.removeEventListener("load", attachToDemo);
      demoWindow?.removeEventListener("keydown", handleKey);
    };
  }, [frameRef]);
}

export function N2Engine() {
  const frameRef = useRef<HTMLIFrameElement>(null);
  useFullscreenKey(frameRef);

  return (
    <ProjectDetail
      title="N2Engine"
      subtitle="A C++ game engine using low-level graphics and physics APIs"
      media={
        <>
          <GameScreen onFullscreen={() => frameRef.current && toggleFullscreen(frameRef.current)}>
            <iframe
              ref={frameRef}
              title="N2Engine web demo"
              src={DEMO_URL}
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          </GameScreen>
          <p>
            <b>Press "F" to toggle fullscreen.</b> The engine compiled to
            WebAssembly (Emscripten), running a Lua-scripted scene on its
            software renderer with PhysX physics. Keys 1-7, 8, 9, 0 and -
            jump between stations, WASD and the arrows fly the camera, and
            the on-screen HUD lists each station's own keys.
          </p>
        </>
      }
      pointsHeading="Key Features"
      pointsInColumns
      points={[
        ["Component system", "GameObject hierarchy, scenes, coroutines and JSON serialization with prefabs"],
        ["Renderers", "OpenGL, WebGPU, software and Vulkan (in progress) behind one graphics-agnostic API"],
        ["Physics", "PhysX and Jolt behind one backend interface; Jolt state can be saved, restored and hashed"],
        ["Soft bodies and particles", "CPU solvers everywhere, optional PhysX GPU backends"],
        ["Text, UI and input", "SDF text, screen and world-space UI, phased action maps for many devices"],
        ["Lua scripting", "Lifecycle scripts, serializable fields and editor extensions"],
        ["Netcode (n2net)", "Own packet layer with reliable and unreliable channels, prediction, lag compensation, rollback and spectators"],
        ["Determinism", "Golden replay and physics hashes compared across Windows, Linux and arm64 in CI"],
        ["Editor", "TCP host with a versioned binary protocol, driven by an Electron and Preact editor"],
        ["MCP bridge (early)", "Lets AI agents inspect and edit a scene under per-agent tokens"],
        ["WebAssembly", "Emscripten build with size budgets enforced in CI"],
        ["SIMD math types", "Use the SIMD instruction sets available on the running system"],
      ]}
      tech={["C++23", "Lua", "OpenGL", "Vulkan", "WebGPU", "NVIDIA PhysX", "Jolt", "WebAssembly", "TypeScript"]}
      links={[
        { label: "View on GitHub", href: "https://github.com/EpicNicks/N2Engine" },
        { label: "Open the demo in a new tab", href: DEMO_URL },
      ]}
    >
      <p>
        N2Engine takes the architectural experience from building NEngine and
        pushes for more ownership of low-level components. Rendering and
        physics sit behind interfaces, so OpenGL, WebGPU and a software
        renderer (with Vulkan in progress) and PhysX or Jolt can be swapped
        without touching game code. That interface-driven architecture is the
        core of the design.
      </p>
    </ProjectDetail>
  );
}
