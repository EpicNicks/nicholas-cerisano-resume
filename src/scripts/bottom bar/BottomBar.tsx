
import React, { Component } from 'react';
import './BottomBar.css';

export class BottomBar extends Component{

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div className="BottomBar">
                <p>
                    lorem ipsum
                </p>
            </div>
        )
    }
}