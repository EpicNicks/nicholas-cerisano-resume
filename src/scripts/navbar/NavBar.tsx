
import { Link } from "react-router-dom";
import { Component } from 'react';
import React from 'react';

import { NavButton } from "./NavButton";


import "./NavBar.css";

interface IProps{

}

interface IState {
    activeBtn: NavButton | null,
    navBtns: Array<NavButton>
}

let activeStateId: string | null = null;

export class NavBar extends Component<IProps, IState>{

    state = {
        activeBtn: null,
        navBtns: [] as NavButton[]
    };

    constructor(props: Readonly<IProps>){
        super(props);
        if(activeStateId === null) {
            activeStateId = 'home';
        }
    }

    setActiveStateId = (id : string) => activeStateId = id;
    getActiveStateId = () : string | null => activeStateId;

    componentDidMount(): void {
        if(this.state.activeBtn === null){
            this.setState({activeBtn: this.state.navBtns[0], navBtns: this.state.navBtns});
        }
    }

    render(){

        return(
            <div className="NavBar">
                <ul>
                    <li>
                        <Link to="/">
                            <NavButton text="Home" id={["","home"]} navBar={this}/>
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                            <NavButton text="About" id={["about"]} navBar={this}/>
                        </Link>
                    </li>
                    <li>
                        <Link to="/resume">
                            <NavButton text="Resume" id={["resume"]} navBar={this}/>
                        </Link>
                    </li>
                    <li>
                        <Link to="/projects">
                            <NavButton text="Projects" id={["projects"]} navBar={this}/>
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}


