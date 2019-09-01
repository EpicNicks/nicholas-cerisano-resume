
import React, { Component } from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import { createBrowserHistory } from 'history'

import './Projects.css';

///#region Component imports
import { SpaceShooter } from "./ProjectComponents/SpaceShooter";
import {Sidebar} from "./Sidebar/Sidebar";
///#endregion

const history = createBrowserHistory();

function DefaultPage() {
    return(
        <div className="ProjectDefault">
            <p>
                Project page default
            </p>
        </div>
    );
}

export class Projects extends Component{

    //add in a scrolling sidebar to navigate different projects
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return(
            <div className="Projects">
                <Router history={history}>
                    <Sidebar/>
                    <Switch>
                        <Route exact path="/projects/space-shooter" component={SpaceShooter}/>
                        <Route component={DefaultPage}/>
                    </Switch>
                </Router>
            </div>
        );
    }
}