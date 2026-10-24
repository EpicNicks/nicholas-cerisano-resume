import { useEffect, useRef, type RefObject } from "react";
import { ProjectDetail } from "../../ProjectDetail/ProjectDetail";

const DEMO_URL = "/n2engine/index.html";

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
      const request =
        document.fullscreenElement === frame ? document.exitFullscreen() : frame.requestFullscreen();
      request.catch(() => {
        // Fullscreen can be refused (no user activation, or blocked by the browser); nothing to do.
      });
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
          <iframe
            ref={frameRef}
            title="N2Engine web demo"
            src={DEMO_URL}
            allow="autoplay; fullscreen"
            allowFullScreen
          />
          <p>
            <b>Press "F" to toggle fullscreen.</b> The engine compiled to
            WebAssembly (Emscripten), running a Lua-scripted scene on its
            software renderer with PhysX physics.
          </p>
        </>
      }
      pointsHeading="Key Features"
      points={[
        ["Hierarchical component system"],
        ["Main loop scheduling", "Coroutines, physics and rendering over the current scene graph, plus scene management"],
        ["Input system", "Event-driven and phased, with support for multiple input devices"],
        ["Asset serialization", "JSON representation of the scene graph built into the component architecture"],
        ["Rendering backend", "Instancing and lighting"],
        ["SIMD math types", "Use the SIMD instruction sets available on the running system"],
      ]}
      tech={["C++", "Lua", "OpenGL", "NVIDIA PhysX", "WebAssembly"]}
      links={[
        { label: "View on GitHub", href: "https://github.com/EpicNicks/N2Engine" },
        { label: "Open the demo in a new tab", href: DEMO_URL },
      ]}
    >
      <p>
        N2Engine takes the architectural experience from building NEngine and
        pushes for more ownership of low-level components. It targets OpenGL
        first, with Vulkan planned, behind a graphics-agnostic API. That
        interface-driven architecture is the core of the design.
      </p>
    </ProjectDetail>
  );
}
