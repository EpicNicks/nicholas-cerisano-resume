
import { Component } from 'react';
import React from 'react';
import { NavBar } from "./NavBar";

interface IProps {
    text: string,
    navBtns: Array<NavButton>,
    navBar: NavBar,
}

interface IState {
}

export class NavButton extends Component<IProps, IState>{

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        let className = this.props.navBar.state.activeBtn === this ? "ActiveNavBtn" : "NavButton";
        this.props.navBtns.push(this);
        return(
            <div
                className={className}
                onClick={()=>{this.props.navBar.setState({activeBtn: this, navBtns: this.props.navBtns})}}
            >
                { this.props.text }
            </div>
        );
    }
}