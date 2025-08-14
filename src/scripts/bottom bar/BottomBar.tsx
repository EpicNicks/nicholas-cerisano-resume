import React from "react";
import { FaLinkedin, FaGithub, MdContactMail } from "react-icons/all";
import "./BottomBar.css";

export function BottomBar() {
  const iconSize = 50;

  return (
    <div className="BottomBar">
      <div className="BottomBarTitle">Contact Me</div>
      <div className="BottomBarIcons">
        <div className="BottomBarLink">
          <div className="EmailOuter">
            <a href="mailto:cerisano.nicholas@gmail.com">
              <MdContactMail className="Email" size={iconSize} />
            </a>
          </div>
          cerisano.nicholas@gmail.com
        </div>
        <div className="BottomBarLink">
          <div className="LinkedInOuter">
            <a
              href="https://www.linkedin.com/in/nicholas-cerisano/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="LinkedIn" size={iconSize} />
            </a>
          </div>
          click me!
        </div>
        <div className="BottomBarLink">
          <div className="GithubOuter">
            <a
              href="https://github.com/epicnicks"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="Github" size={iconSize} />
            </a>
          </div>
          click me!
        </div>
      </div>
    </div>
  );
}
