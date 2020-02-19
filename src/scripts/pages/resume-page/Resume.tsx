
import React, { Component } from 'react';
import './Resume.css';

export class Resume extends Component{

    render(){
        const resumeLink = require("../../../media/documents/Nicholas Cerisano_Resume (February 2020).pdf");
        return(
            <div className="Resume">
                <h1>
                    Link to a PDF copy of my resume: <a rel="noopener noreferrer" target="_blank" href={resumeLink}>
                        here
                    </a>
                </h1>
                <h3>
                    Check out some of the projects listed in my resume in the projects tab of this page.
                </h3>
            </div>
        );
    }
}
