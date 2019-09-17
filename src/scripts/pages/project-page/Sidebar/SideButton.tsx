
import React, { Component } from 'react';
import {NavBar} from "../../../navbar/NavBar";
import {NavButton} from "../../../navbar/NavButton";
import { Sidebar } from "./Sidebar";

import "./Sidebar.css";

interface IProps {
    text: string,
    navBar: Sidebar,
    id: string,
}

interface IState {

}

export class SideButton extends Component<IProps, IState>{

    render(){
        let href = window.location.href.split('/');
        let className = href[href.length - 1] === this.props.id ? "ActiveSideButton" : "SideButton";
        return(
            <div className={className + " " + href[href.length - 1]/*this is used to differentiate css colors*/}
                 onClick={()=> {
                     this.props.navBar.setActiveStateId(this.props.id);
                     this.props.navBar.setState({activeBtn: this});
                 }}
            >
                { this.props.text }
            </div>
        );
    }
}