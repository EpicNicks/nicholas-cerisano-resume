
import { Component } from 'react';
import React from 'react';
import { NavBar } from "./NavBar";

interface IProps {
    text: string,
    navBar: NavBar,
    id: string,
}
interface IState {}

export class NavButton extends Component<IProps, IState>{

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        let className = this.props.navBar.getActiveStateId() === this.props.id ? "ActiveNavBtn" : "NavButton";
        return(
            <div
                className={className}
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