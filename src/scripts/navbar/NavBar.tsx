
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

export class NavBar extends Component<IProps, IState>{

    state = {
        activeBtn: null,
        navBtns: [] as NavButton[]
    };

    componentDidMount(): void {
        if(this.state.activeBtn === null){
            this.setState({activeBtn: this.state.navBtns[0], navBtns: this.state.navBtns});
        }
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {

        return(
            <div className="NavBar">
                <ul>
                    <li>
                        <Link to="/home">
                            <NavButton text="Home" navBtns={this.state.navBtns} navBar={this}/>
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                            <NavButton text="About" navBtns={this.state.navBtns} navBar={this}/>
                        </Link>
                    </li>
                    <li>
                        <Link to="/resume">
                            <NavButton text="Resume" navBtns={this.state.navBtns} navBar={this}/>
                        </Link>
                    </li>
                    <li>
                        <Link to="/projects">
                            <NavButton text="Projects" navBtns={this.state.navBtns} navBar={this}/>
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}


