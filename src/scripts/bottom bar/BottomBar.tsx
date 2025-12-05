import { FaLinkedin, FaGithub } from "react-icons/fa";
import "./BottomBar.css";

export function BottomBar() {
  const iconSize = window.innerWidth <= 768 ? 30 : 50; // Smaller icons on mobile

  return (
    <div className="BottomBar">
      <div className="BottomBarTitle">Contact Me</div>
      <div className="BottomBarIcons">
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
