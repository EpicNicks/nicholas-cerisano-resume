
import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'
import {SideButton} from "./SideButton";
import {NavButton} from "../../../navbar/NavButton";

import "./Sidebar.css";

interface IProps {}
interface IState {
    activeBtn: SideButton | null,
    navBtns: Array<SideButton>
}

let activeStateId: string | null = null;

export class Sidebar extends Component<IProps, IState>{

    state = {
        activeBtn: null,
        navBtns: [] as SideButton[]
    };

    setActiveStateId = (id : string) => activeStateId = id;
    getActiveStateId = () : string | null => activeStateId;

    constructor(props: Readonly<IProps>){
        super(props);
        if(activeStateId === null)
            activeStateId = 'home';
        else{
            let href = window.location.href.split('/');
            activeStateId = href[href.length - 1];
        }
    }

    render(){
        return(
            <div className="SideBar">
                <ul>
                    <li>
                        <Link to="/projects">
                            <SideButton text="Projects Home" id="projects" navBar={this}/>
                        </Link>
                    </li>
                    <li>
                        <Link to="/projects/space-shooter">
                            <SideButton text="Space Shooter" id="space-shooter" navBar={this}/>
                        </Link>
                    </li>
                    <li>
                        <Link to="/projects/glitch-garden">
                            <SideButton text="Glitch Garden" id="glitch-garden" navBar={this}/>
                        </Link>
                    </li>
                    <li>
                        <Link to="/projects/game-day">
                            <SideButton text="Game Day" id="game-day" navBar={this}/>
                        </Link>
                    </li>
                    {/*<li>*/}
                    {/*    <Link to="/projects/infinite-runner">*/}
                    {/*        <SideButton text="Infinite Runner" id="infinite-runner" navBar={this}/>*/}
                    {/*    </Link>*/}
                    {/*</li>*/}
                    <li>
                        <Link to="/projects/portfolio">
                            <SideButton text="Portfolio" id="portfolio" navBar={this} />
                        </Link>
                    </li>
                </ul>
            </div>
        );
    }
}