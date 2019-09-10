
import React, { Component } from 'react';
import './About.css';

export class About extends Component{

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return(
            <div className="About">
                <h1>
                    About Me
                </h1>
                <div className="About-Main">
                    <div className="About-Image">
                        <img
                            //placeholder photo
                            src={require("D:\\JetBrains Projects\\WebstormProjects\\nicholas-cerisano-portfolio\\src\\media\\images\\MyPhoto.jpg")}
                            alt={require("D:\\JetBrains Projects\\WebstormProjects\\nicholas-cerisano-portfolio\\src\\media\\images\\MyPhoto.jpg")}
                        />
                    </div>
                    <div className="About-Body">
                        <h2>
                            Bio
                        </h2>
                        <p>
                            I am a second-year Computer Science student attending York University.<br/>
                            I spend most of my spare time programming for fun.
                        </p>
                        <h2>
                            Hobbies
                        </h2>
                        <p>

                        </p>
                    </div>
                </div>
            </div>
        );
    }
}