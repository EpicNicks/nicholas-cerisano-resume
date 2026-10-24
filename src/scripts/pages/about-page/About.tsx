import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./About.css";

import nicholasHeadshot from "../../../../src/media/images/Nicholas Headshot 3.png";

export function About() {
  const [isImageExpanded, setIsImageExpanded] = useState(false);

  return (
    <div className="About">
      <div className="About-Main">
        <div className="About-Body">
          <h1>About Me</h1>
          <p className="About-Lead">
            I'm a software developer with over 5 years of professional
            experience building full-stack web and cloud applications, and many
            more years across other areas of software:
          </p>
          <ul className="About-Areas">
            <li>Game Development</li>
            <li>Android Development</li>
            <li>Game Engine Development</li>
            <li>
              Unit Testing, Integration Testing, API Testing, E2E (End-to-End)
              Testing
            </li>
          </ul>
          <p>
            I graduated from the Specialized Honours Bachelor of Computer
            Science program at York University, and I approach problems with a
            pragmatic and logical mindset. Beyond work, I enjoy exploring new
            technologies and experimenting with projects that push me to grow
            as a developer.
          </p>
        </div>
        <motion.div
          className="About-Image"
          layoutId="about-profile-image"
          onClick={() => setIsImageExpanded(true)}
          whileHover={{ scale: 1.05 }}
          style={{ cursor: "pointer" }}
        >
          <img src={nicholasHeadshot} alt="My profile" />
        </motion.div>
        <div className="About-Interests">
          <div className="AboutSoftwareInterests">
            <h3>My interests in Software include:</h3>
            <ul>
              <li>
                <b>Agentic Development</b>
                <span>
                  Building with AI agents such as Claude Code, and designing
                  workflows around them
                </span>
              </li>
              <li>
                <b>Software Architecture and Design</b>
              </li>
              <li>
                <b>Full-Stack Web Development</b>
              </li>
              <li>
                <b>Game Development and Game Engine Design</b>
              </li>
              <li>
                <b>DevOps and Cloud Infrastructure</b>
              </li>
            </ul>
          </div>
          <div className="AboutPersonalInterests">
            <h3>My interests and hobbies include:</h3>
            <ul>
              <li>
                <b>Exploring new frameworks, languages and design patterns</b>
                <span>For fresh perspectives on problem solving</span>
              </li>
              <li>
                <b>Linguistics and languages</b>
              </li>
              <li>
                <b>Designing and developing games in Unity Engine</b>
              </li>
              <li>
                <b>Chess</b>
              </li>
              <li>
                <b>Reading fantasy novels</b>
              </li>
            </ul>
          </div>
          <div className="AboutFormerly">
            <h3>Formerly,</h3>
            <ul>
              <li>
                <b>Practicing Brazilian Jiu-Jitsu</b>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isImageExpanded && (
          <motion.div
            className="expanded-image-overlay"
            onClick={() => setIsImageExpanded(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="expanded-image-container"
              layoutId="about-profile-image"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                className="close-button"
                onClick={() => setIsImageExpanded(false)}
                aria-label="Close"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                whileHover={{
                  scale: 1.1,
                  rotate: 90,
                  backgroundColor: "rgba(220, 38, 38, 0.8)",
                  borderColor: "rgba(255, 59, 59, 0.9)",
                }}
                whileTap={{
                  scale: 0.9,
                  backgroundColor: "rgba(185, 28, 28, 0.9)",
                }}
                transition={{ duration: 0.2 }}
              >
                ×
              </motion.button>
              <img src={nicholasHeadshot} alt="My profile expanded" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
