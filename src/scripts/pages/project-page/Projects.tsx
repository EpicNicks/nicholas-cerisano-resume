
import React, { Component } from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import { createBrowserHistory } from 'history'

import './Projects.css';

///#region Component imports
import { Sidebar } from "./Sidebar/Sidebar";

import { SpaceShooter } from "./ProjectComponents/SpaceShooter";
import { GlitchGarden } from "./ProjectComponents/GlitchGarden";
import { GameDay } from "./ProjectComponents/GameDay";
import { InfiniteRunner } from "./ProjectComponents/Infinite Runner";
///#endregion

const history = createBrowserHistory();

function DefaultPage() {
    return(
        <div className="ProjectDefault">
            <h1>
                Welcome to the Project Page.
            </h1>
            <h3>
                Feel free to click on the sidebar buttons to get a look at some of my
                personal projects.
            </h3>
        </div>
    );
}

export class Projects extends Component{

    //add in a scrolling sidebar to navigate different project-page
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return(
            <div className="Projects">
                <Router history={history}>
                    <Sidebar/>
                    <Switch>
                        <Route exact path="/projects/space-shooter" component={SpaceShooter}/>
                        <Route exact path="/projects/glitch-garden" component={GlitchGarden}/>
                        <Route exact path="/projects/game-day" component={GameDay}/>
                        <Route exact path="/projects/infinite-runner" component={InfiniteRunner}/>
                        <Route component={DefaultPage}/>
                    </Switch>
                </Router>
            </div>
        );
    }
}