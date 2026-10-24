import React, { useEffect, useRef } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import resumePdf from "../../media/documents/Nicholas Cerisano Resume.pdf";
import codingClip from "../../../src/media/videos/sample coding clip.mp4";

export function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);

  // The clip is background texture, not content: played fast and blurred (see Home.css).
  useEffect(() => {
    const video = videoRef.current;
    if (video === null) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.pause();
    } else {
      video.playbackRate = 10.0;
    }
  }, []);

  const preventContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    return false;
  };

  return (
    <div className="VideoContainer">
      <div className="VideoPlayer" aria-hidden="true">
        <video
          ref={videoRef}
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
        <div className="SubtitleContainer">
          <h3>
            <strong>5 Years</strong> Professionally Creating Fullstack Apps for
            Web and Cloud
          </h3>
          <h3>
            <strong>15 Years</strong> Curiously Exploring and Building in
            Software
          </h3>
        </div>
        <div className="SocialLinks">
          <a
            href="https://github.com/epicnicks"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub aria-hidden="true" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/nicholas-cerisano/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin aria-hidden="true" />
            LinkedIn
          </a>
          <a
            className="homepage-resume-download-btn"
            href={resumePdf}
            download="Nicholas Cerisano Resume.pdf"
          >
            <FiDownload size={18} aria-hidden="true" />
            Download My Resume
          </a>
        </div>
      </div>
    </div>
  );
}
