
import { Component } from 'react';
import React from 'react';
import { NavBar } from "./NavBar";

interface IProps {
    text: string,
    navBar: NavBar,
    id: Array<string>,
}
interface IState {}

export class NavButton extends Component<IProps, IState>{

    render(){
        let href = window.location.href.split('/');
        let className = this.props.id.includes(href[href.length - 1]) ? "ActiveNavBtn" : "NavButton";
        return(
            <div
                className={className}
                onClick={()=> {
                    this.props.navBar.setActiveStateId(this.props.id[0]);
                    this.props.navBar.setState({activeBtn: this});
                }}
            >
                { this.props.text }
            </div>
        );
    }
}