import React, { useEffect } from "react";

export function VideoPlayer() {
  useEffect(() => {
    const video = document.querySelector("video");
    if (video !== null) video.playbackRate = 10.0;
  }, []);

  const url = require("../../../src/media/videos/sample coding clip.mp4");
  return (
    <div className="VideoContainer">
      <div className="VideoPlayer">
        <video
          className="video-container video-container-overlay"
          loop={true}
          muted={true}
          data-reactid=".0.1.0.0"
          autoPlay={true}
        >
          <source type="video/mp4" data-reactid=".0.1.0.0.0" src={url} />
        </video>
      </div>
      <h1>About Nicholas Cerisano</h1>
      <h2>Software Developer</h2>
    </div>
  );
}
