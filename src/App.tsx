import React, {Component} from 'react';
import './App.css';
import { NavBar } from "./scripts/navbar/NavBar";
import {Router, Route, Redirect, Switch, HashRouter} from 'react-router-dom';
import {createBrowserHistory} from "history";

import { BottomBar } from "./scripts/bottom bar/BottomBar";

//#region Routes
import { Home } from './scripts/pages/home-page/Home';
import { Resume } from "./scripts/pages/resume-page/Resume";
import { Projects } from './scripts/pages/project-page/Projects';
import { About } from "./scripts/pages/about-page/About";
//#endregion

// const history = createBrowserHistory({
//     basename: process.env.PUBLIC_URL,
// });

class App extends Component {

    render(){
        return (
            <div className="App">
                <HashRouter basename={''}>
                    <NavBar/>
                        <Switch>
                            <Route exact path="/home" component={Home}/>
                            <Route exact path="/about" component={About}/>
                            <Route exact path="/resume" component={Resume}/>
                            <Route path="/projects" component={Projects}/>
                            <Redirect from={"/"} to={"/home"}/>
                        </Switch>
                    <BottomBar/>
                </HashRouter>
            </div>
        );
    }

};

export default App;
