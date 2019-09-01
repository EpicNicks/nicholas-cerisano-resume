
import React, { Component } from 'react';
import {NavBar} from "../../navbar/NavBar";
import {NavButton} from "../../navbar/NavButton";

interface IProps {
    text: string,
    navBtns: Array<NavButton>,
    navBar: NavBar,
}

interface IState {

}

export class SideButton extends Component<IProps, IState>{

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        let className = this.props.navBar.state.activeBtn === this ? "ActiveSideButton" : "SideButton";
        this.props.navBtns.push(this);
        return(
            <div className={className} onClick={()=>{this.props.navBar.setState({activeBtn: this, navBtns: this.props.navBtns})}}>
                { this.props.text }
            </div>
        );
    }
}