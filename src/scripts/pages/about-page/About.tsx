
import React, { Component } from 'react';
import './About.css';

export class About extends Component{

    render() {
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
                            I am a proactive pragmatic logical thinker.<br/>
                            I spend most of my spare time programming for fun.
                        </p>
                        <h2>
                            Hobbies
                        </h2>
                        <h3>
                            My hobbies include:
                        </h3>
                        <ul>
                            <li>
                                Trying new frameworks and programming languages to see different ways of reasoning problems
                            </li>
                            <li>
                                Writing utility programs to perform tasks such as read my todo-list to me
                            </li>
                            <li>
                                Making games in Unity Engine
                            </li>
                            <li>
                                Playing chess
                            </li>
                            <li>
                                Reading fantasy novels and programming textbooks
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}