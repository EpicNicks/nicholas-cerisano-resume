import { FaGithub } from "react-icons/fa";
import "./N2Engine.css";

export function N2Engine() {
  return (
    <div className="N2Engine">
      <div className="N2EngineHeader">
        <h1>N2Engine</h1>
        <h3>A C++ Game Engine using low-level Graphics and Physics APIs</h3>
        <a
          href="https://github.com/EpicNicks/N2Engine"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3>
            My GitHub repo &nbsp;
            <FaGithub className="Github" size={32} />
          </h3>
        </a>
      </div>
      <div className="N2EngineText">
        <p>
          N2Engine is a game engine that I am currently developing using C++. It
          takes from my architectural experience building the first NEngine and
          pushes higher ownership of low-level components.
        </p>
        <p>
          I decided to build N2Engine when I gained the prerequisite knowledge
          to sate my curiosity with graphics and physics programming. I decided
          to iterate with OpenGL with Vulkan as a graphics backend target for
          future. I focused on building an agnostic API which will be able to
          slot in either graphics API. This interface-driven architecture is the
          core of the design philosophy of this project.
        </p>

        <div className="N2Engine-features">
          <h4>Key Features</h4>
          <ul>
            <li>
              <strong>Hierarchical Component System:</strong>
            </li>
            <li>
              <strong>Main Loop Scheduling:</strong> Full coroutine, physics,
              and rendering on the current Scene graph along with Scene
              management.
            </li>
            <li>
              <strong>Input System:</strong> An Event-driven phased input system
              with support for multiple input devices.
            </li>
            <li>
              <strong>Asset Serialization/Deserialization:</strong> JSON
              representation of the Scene graph containing GameObject and
              Component properties baked into the Component architecture.
            </li>
            <li>
              <strong>Rendering Backend:</strong> An efficient rendering backend
              with support for instancing and lighting.
            </li>
            <li>
              <strong>SIMD Math types</strong> Efficient math types leveraging
              available SIMD instruction sets on the running system.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
