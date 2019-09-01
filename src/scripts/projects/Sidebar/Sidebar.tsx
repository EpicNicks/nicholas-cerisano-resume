
import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'
import {SideButton} from "./SideButton";
import {NavButton} from "../../navbar/NavButton";

import "./Sidebar.css";

interface IProps {

}

interface IState {
    activeBtn: NavButton | null,
    navBtns: Array<NavButton>
}

export class Sidebar extends Component<IProps, IState>{

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
            <div className="SideBar">
                <ul>
                    <li>
                        <Link to="/projects">
                            <SideButton text="Default" navBtns={this.state.navBtns} navBar={this}/>
                        </Link>
                    </li>
                    <li>
                        <Link to="/projects/space-shooter">
                            <SideButton text="Space Shooter" navBtns={this.state.navBtns} navBar={this}/>
                        </Link>
                    </li>
                    <li>
                        <Link to="/projects/glitch-garden">
                            <SideButton text="Glitch Garden" navBtns={this.state.navBtns} navBar={this}/>
                        </Link>
                    </li>
                </ul>
            </div>
        );
    }
}