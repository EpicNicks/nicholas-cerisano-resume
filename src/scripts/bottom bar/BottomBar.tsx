
import React, { Component } from 'react';
import { FaLinkedin, FaGithub, MdContactMail, MdContactPhone } from "react-icons/all";
import './BottomBar.css';

export class BottomBar extends Component{

    render(){
        const iconSize : number = 50;

        return (
            <div className="BottomBar">
                <div className="BottomBarTitle">
                    Contact Me
                </div>
                <div className="BottomBarIcons">
                    <div className="IconBundle">
                        <MdContactMail className="Email" size={iconSize} />
                        epicnicks2.0@gmail.com
                    </div>
                    <div className="IconBundle">
                        <MdContactPhone className="Phone" size={iconSize} />
                        416-556-4060
                    </div>
                    <a href="https://www.linkedin.com/in/nicholas-cerisano-53a389173/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="LinkedIn" size={iconSize} />
                    </a>
                    <a href="https://github.com/epicnicks" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="Github" size={iconSize} />
                    </a>
                </div>
            </div>
        )
    }
}