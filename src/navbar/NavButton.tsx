
import { Component } from 'react';
import React from 'react';

type NavButtonProps = {
    text: string,
};

//Wrapper class for CSS markdown
export class NavButton extends Component<NavButtonProps>{

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return(
            <div className="NavButton">
                { this.props.text }
            </div>
        );
    }
}