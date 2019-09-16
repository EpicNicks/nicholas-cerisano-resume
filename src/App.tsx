import React, {Component} from 'react';
import './App.css';
import { NavBar } from "./scripts/navbar/NavBar";
import {Router, Route, Redirect, Switch } from 'react-router-dom';
import {createBrowserHistory} from "history";

import { BottomBar } from "./scripts/bottom bar/BottomBar";

//#region Routes
import { Home } from './scripts/pages/home-page/Home';
import { Resume } from "./scripts/pages/resume-page/Resume";
import { Projects } from './scripts/pages/project-page/Projects';
import { About } from "./scripts/pages/about-page/About";
//#endregion

const history = createBrowserHistory();

class App extends Component {

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div className="App">
                <Router history={history}>
                    <NavBar/>
                        <Switch>
                            <Route exact path="/home" component={Home}/>
                            <Route exact path="/about" component={About}/>
                            <Route exact path="/resume" component={Resume}/>
                            <Route exact path="/projects" component={Projects}/>
                            <Route component={Home}/>
                            <BottomBar/>
                        </Switch>
                </Router>
            </div>
        );
    }

};

export default App;
