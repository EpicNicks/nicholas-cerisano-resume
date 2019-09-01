import React, {Component} from 'react';
import './App.css';
import { NavBar } from "../src/scripts/navbar/NavBar";
import {Router, Route, Link, Redirect} from 'react-router-dom';
import { NavButton } from "../src/scripts/navbar/NavButton";
import {createBrowserHistory} from "history";

//#region Routes
import { Home } from '../src/scripts/home/Home';
import { Resume } from "../src/scripts/resume/Resume";
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
                    <BottomBar/>
                </Router>
            </div>
        );
    }

};

export default App;
