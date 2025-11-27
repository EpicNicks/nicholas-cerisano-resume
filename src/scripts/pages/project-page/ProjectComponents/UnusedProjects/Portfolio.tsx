import React from "react";

export function Portfolio() {
  return (
    <div className="PortfolioProject">
      <h1>This Portfolio</h1>
      <h3>
        I built this website myself in React using TypeScript.
        <br />
        You can check out the code on my GitHub using the GitHub icon in the
        'Contact Me' bar below, or by clicking{" "}
        <a
          href="https://github.com/epicnicks"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
        .<br />
      </h3>
      <div className="PortfolioProjectLogos">
        <img
          className="ReactLogo"
          src={require("../../../../../src/media/images/react-logo.png")}
          alt={require("../../../../../src/media/images/react-logo.png")}
        />
        <img
          className="TSLogo"
          src={require("../../../../../src/media/images/typescript-logo.png")}
          alt={require("../../../../../src/media/images/typescript-logo.png")}
        />
      </div>
    </div>
  );
}
