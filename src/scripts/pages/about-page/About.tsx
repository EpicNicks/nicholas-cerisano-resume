
import React, { Component } from 'react';
import './About.css';

export class About extends Component{

    render() {
        return(
            <div className="About">
                <div className="About-Main">
                    <div className="About-Body">
                        <h1>About Me</h1>
                        {/*<h2>*/}
                        {/*    Bio*/}
                        {/*</h2>*/}
                        <p>
                            I'm a graduate from the Specialized Honors Bachelor of Computer Science program at York University.
                            I'm a proactive pragmatic logical thinker.
                            I spend most of my spare time programming for fun.
                        </p>
                        {/*<h2>*/}
                        {/*    Hobbies*/}
                        {/*</h2>*/}
                        <h3>
                            My hobbies include:
                        </h3>
                        <ul>
                            <li>
                                Trying new frameworks and programming languages to see different ways of reasoning problems
                            </li>
                            <li>
                                Making games in Unity Engine
                            </li>
                            <li>
                                Practicing Brazilian Jiu-Jitsu
                            </li>
                            <li>
                                Playing chess
                            </li>
                            <li>
                                Reading fantasy novels and programming textbooks
                            </li>
                        </ul>
                    </div>
                    <div className="About-Image">
                        <img
                            //placeholder photo
                            src={require("../../../../src/media/images/MyPhoto.jpg")}
                            alt={require("../../../../src/media/images/MyPhoto.jpg")}
                        />
                    </div>
                </div>
            </div>
        );
    }
}