import React from "react";
import { FaGithub } from "react-icons/fa";

export function NEngineEditor() {
  return (
    <div className="NEngineEditor">
      <div className="NEngineEditorHeader">
        <h1>NEngine Editor</h1>
        <h3>A Game Engine Editor built with C# and WPF</h3>
        <a
          href="https://github.com/EpicNicks/NEngineEditor"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3>
            My GitHub repo &nbsp;
            <FaGithub className="Github" size={32} />
          </h3>
        </a>
      </div>
      <div className="NEngineEditorText">
        <p>
          NEngine Editor is a game engine editor that I built using C# and WPF.
          The game engine it creates scenes for is called NEngine, which is a
          game engine I had developed first with SFML as the graphics library.
        </p>
        <p>
          NEngine Editor was built as part of my personal project to learn how
          to create a game engine as well as the software architecture which
          goes into it. I wanted to learn more about game engine architecture
          and design patterns, as well as improve my C# and WPF skills.
        </p>

        <div className="NEngineEditor-features">
          <h4>Key Features</h4>
          <ul>
            <li>
              <strong>Scene View:</strong> A 2D view of the game world where
              users can place and manipulate game objects. Scenes are
              represented as JSON of C# object properties obtained through
              reflection and applied when the scene is deserialized in the
              engine loop.
            </li>
            <li>
              <strong>Hierarchy:</strong> A list view that displays all the game
              objects in the scene.
            </li>
            <li>
              <strong>Inspector:</strong> A panel that shows the serialized
              properties of the selected game object.
            </li>
            <li>
              <strong>Asset Browser:</strong> A panel that displays all the
              files in the project.
            </li>
          </ul>
        </div>
      </div>

      {/* <div className="NEngineEditorMedia">
        <img
          src={require("../../../../media/images/nengine-editor-1.png")}
          alt="NEngine Editor Screenshot 1"
        />
        <img
          src={require("../../../../media/images/nengine-editor-2.png")}
          alt="NEngine Editor Screenshot 2"
        />
      </div> */}
    </div>
  );
}
