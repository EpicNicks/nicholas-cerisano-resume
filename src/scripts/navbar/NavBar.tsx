
import { Route, Link, Router} from "react-router-dom";
import { createBrowserHistory } from 'history';
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
                            <NavButton text="Home" path={"home"} navBtns={this.state.navBtns} navBar={this}/>
                        </Link>
                    </li>
                    <li>
                        <Link to="/resume">
                            <NavButton text="Resume" path={"resume"} navBtns={this.state.navBtns} navBar={this}/>
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}


