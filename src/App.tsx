import React from 'react';
import './App.css';
import { NavBar } from "./navbar/NavBar";
import {Router, Route, Link, Redirect} from 'react-router-dom';
import { NavButton } from "./navbar/NavButton";
import {createBrowserHistory} from "history";

//#region Routes
import { Home } from './home/Home';
import { Resume } from "./resume/Resume";
//#endregion

const history = createBrowserHistory();

const App: React.FC = () => {
  return (
        <div className="App">
            <Router history={history}>
                <NavBar/>
                <Redirect from="/" to="/home"/>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/resume" component={Resume}/>
            </Router>
        </div>

  );
};

export default App;
