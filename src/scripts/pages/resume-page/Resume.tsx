import React, { Component } from "react";

import "./Resume.css";

const resumeLink = require("../../../media/documents/Nicholas Cerisano Resume.pdf");

export class Resume extends Component {
  render() {
    return (
      <div className="Resume">
        <h2>
          {/*Link to a PDF copy of my resume:*/}
          &nbsp;
          {/*<a rel="noopener noreferrer" target="_blank" href={resumeLink}>*/}
          {/*    Click to Download Resume*/}
          {/*</a>*/}
          <a href={resumeLink} download="Nicholas Cerisano Resume">
            Click to Download Resume
          </a>
        </h2>
        {/*<h2>*/}
        {/*    Or view below:*/}
        {/*</h2>*/}
        <iframe src={resumeLink + "#zoom=125"} />
        <h3>
          Check out some of the projects listed in my resume in the projects tab
          of this page.
        </h3>
      </div>
    );
  }
}
