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
          <p>
            I'm a software developer with over 4 years of professional
            experience building fullstack web and cloud applications - and many
            more years across different areas of the software space, such as:
          </p>
          <ul>
            <li style={{ margin: 0 }}>Game Development</li>
            <li style={{ margin: 0 }}>Android Development</li>
            <li style={{ margin: 0 }}>Game Engine Development</li>
            <li style={{ margin: 0 }}>
              Unit Testing, Integration Testing, API Testing, E2E (End-to-End)
              Testing
            </li>
          </ul>
          <p>
            I graduated from the Specialized Honors Bachelor of Computer Science
            program at York University, and I approach problems with a pragmatic
            and logical mindset. Beyond work, I enjoy exploring new technologies
            and experimenting with projects that push me to grow as a developer.
          </p>
          <div className="About-Interests">
            <div className="AboutSoftwareInterests">
              <h3>My interests in Software include:</h3>
              <ul>
                <li>Software Architecture and Design</li>
                <li>Full-Stack Web Development</li>
                <li>Game Development and Game Engine Design</li>
                <li>DevOps and Cloud Infrastructure</li>
              </ul>
            </div>
            <div className="AboutPersonalInterests">
              <h3>My interests and hobbies include:</h3>
              <ul>
                <li>
                  Exploring new frameworks, programming languages, and design
                  patterns to gain fresh perspectives on problem solving
                </li>
                <li>Linguistics and languages</li>
                <li>Designing and developing games in Unity Engine</li>
                <li>Practicing Brazilian Jiu-Jitsu</li>
                <li>Chess</li>
                <li>Reading fantasy novels</li>
              </ul>
            </div>
          </div>
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
