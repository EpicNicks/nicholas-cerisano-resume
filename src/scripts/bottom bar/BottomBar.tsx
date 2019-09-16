
import React, { Component } from 'react';
import { FaLinkedin, FaGithub } from "react-icons/all";
import './BottomBar.css';

export class BottomBar extends Component{

    render(){
        const iconSize : number = 50;

        return (
            <div className="BottomBar">
                <a href="https://www.linkedin.com/in/nicholas-cerisano-53a389173/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="LinkedIn" size={iconSize} />
                </a>
                <a href="https://github.com/epicnicks" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="Github" size={iconSize} />
                </a>
            </div>
        )
    }
}