
import React, { Component } from 'react';
import { Route, Switch,} from 'react-router-dom';
import { createBrowserHistory } from 'history'

import './Projects.css';

///#region Component imports
import { Sidebar } from "./Sidebar/Sidebar";

import { SpaceShooter } from "./ProjectComponents/SpaceShooter";
import { GlitchGarden } from "./ProjectComponents/GlitchGarden";
import { GameDay } from "./ProjectComponents/GameDay";
import { InfiniteRunner } from "./ProjectComponents/Infinite Runner";
import { Portfolio } from "./ProjectComponents/Portfolio";
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
    render(){
        return(
            <div className="Projects">
                {/*<Router history={history}>*/}
                    <Sidebar/>
                    <Switch>
                        <Route exact path="/projects/space-shooter" component={SpaceShooter}/>
                        <Route exact path="/projects/glitch-garden" component={GlitchGarden}/>
                        <Route exact path="/projects/game-day" component={GameDay}/>
                        <Route exact path="/projects/infinite-runner" component={InfiniteRunner}/>
                        <Route exact path="/projects/portfolio" component={Portfolio}/>
                        <Route exact path="/projects" component={DefaultPage}/>
                        <Route component={DefaultPage}/>
                    </Switch>
                {/*</Router>*/}
            </div>
        );
    }
}