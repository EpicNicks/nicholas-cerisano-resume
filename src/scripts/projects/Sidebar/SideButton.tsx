
import React, { Component } from 'react';
import {NavBar} from "../../navbar/NavBar";
import {NavButton} from "../../navbar/NavButton";

import "./Sidebar.css";

interface IProps {
    text: string,
    navBtns: Array<NavButton>,
    navBar: NavBar,
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

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        let className = this.props.navBar.state.activeBtn === this ? "ActiveSideButton" : "SideButton";
        this.props.navBtns.push(this);
        return(
            <div className={className + " " + pathnameToCSSClass(window.location.pathname)/*this is used to differentiate css colors*/}
                 onClick={()=> {
                     this.props.navBar.setState({activeBtn: this, navBtns: this.props.navBtns});
                 }}
            >
                { this.props.text }
            </div>
        );
    }
}