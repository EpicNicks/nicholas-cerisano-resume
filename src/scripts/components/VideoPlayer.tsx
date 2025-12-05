import React, { useEffect } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

import codingClip from "../../../src/media/videos/sample coding clip.mp4";

export function VideoPlayer() {
  useEffect(() => {
    const video = document.querySelector("video");
    if (video !== null) video.playbackRate = 10.0;
  }, []);

  const iconSize = window.innerWidth <= 768 ? 32 : 48;

  const preventContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    return false;
  };

  return (
    <div className="VideoContainer">
      <div className="VideoPlayer">
        <video
          className="video-container video-container-overlay"
          loop={true}
          muted={true}
          autoPlay={true}
          playsInline
          preload="auto"
          disablePictureInPicture
          controlsList="nodownload nofullscreen noremoteplayback"
          onContextMenu={preventContextMenu}
        >
          <source type="video/mp4" src={codingClip} />
        </video>
        <div className="VideoOverlay" onContextMenu={preventContextMenu}></div>
      </div>
      <div className="VideoOverlayText">
        <h1>Nicholas Cerisano</h1>
        <h2>Software Developer</h2>

        <div className="SocialLinks">
          <a
            href="https://github.com/epicnicks"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={iconSize} />
          </a>

          <a
            href="https://www.linkedin.com/in/nicholas-cerisano/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={iconSize} />
          </a>
        </div>
      </div>
    </div>
  );
}
