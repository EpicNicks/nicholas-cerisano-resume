
import { Route, Link, Router} from "react-router-dom";
import { createBrowserHistory } from 'history';
import { Component } from 'react';
import React from 'react';

import { NavButton } from "./NavButton";


import "./NavBar.css";


export class NavBar extends Component{

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return(
            <div className="NavBar">
                <ul>
                    <li>
                        <Link to="/home">
                            <NavButton text="Home"/>
                        </Link>
                    </li>
                    <li>
                        <Link to="/resume">
                            <NavButton text="Resume"/>
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}


