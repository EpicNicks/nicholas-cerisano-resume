import React from "react";
import "./DummyInsomnia.css";

export function DummyInsomnia() {
  return (
    <div className="DummyInsomnia">
      <div className="TextContent">
        <h1>Dummy Insomnia</h1>
        <h4>
          A PG 3D Survival Horror Game Prototype created for a group project for
          my University game design class DATT 4300
        </h4>
      </div>
      <video
        src="/media/videos/Dummy Insomnia clip.mkv"
        autoPlay
        loop
        muted
        playsInline
        style={{
          width: "100%",
          height: "auto",
          borderRadius: "4px",
          marginBottom: "12px",
        }}
      />
      <div className="TextContent">
        <p>
          This game was created with the limitation of following the theme of
          "Snooze"
          <br />
          Unfortunately, the project was built for the HD Render Pipeline (HDRP)
          and cannot be built for WebGL, so I am unable to provide a playable
          version
        </p>
      </div>
    </div>
  );
}
