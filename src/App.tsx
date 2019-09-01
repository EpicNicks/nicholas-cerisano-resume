import React, {Component} from 'react';
import './App.css';
import { NavBar } from "./scripts/navbar/NavBar";
import {Router, Route, Redirect} from 'react-router-dom';
import {createBrowserHistory} from "history";

//#region Routes
import { Home } from './scripts/home/Home';
import { Resume } from "./scripts/resume/Resume";
import { Projects } from './scripts/projects/Projects';
import { BottomBar } from "./scripts/bottom bar/BottomBar";
//#endregion

const history = createBrowserHistory();

class App extends Component {

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div className="App">
                <Router history={history}>
                    <NavBar/>
                    <Redirect from="/" to="/home"/>
                    <Route exact path="/home" component={Home}/>
                    <Route exact path="/resume" component={Resume}/>
                    <Route exact path="/projects" component={Projects}/>
                    <BottomBar/>
                </Router>
            </div>
        );
    }

};

export default App;
