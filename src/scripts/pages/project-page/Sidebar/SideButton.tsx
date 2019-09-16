
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

let pathnameToCSSClass = (url : string) : string => {
      let reduced : string[] = [] as string[];
      for(let i = url.length; i --> 0;){
            if(url[i] === "/"){
                break;
            }
            else {
                reduced.unshift(url[i]);
            }
      }
      return reduced.join("");
};

export class SideButton extends Component<IProps, IState>{

    render(){
        let className = this.props.navBar.getActiveStateId() === this.props.id ? "ActiveSideButton" : "SideButton";
        return(
            <div className={className + " " + this.props.navBar.getActiveStateId()/*this is used to differentiate css colors*/}
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