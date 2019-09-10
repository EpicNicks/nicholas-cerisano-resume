
import React, { Component } from 'react';
import './Resume.css';

export class Resume extends Component{

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return(
            <div className="Resume">
                <h1>
                    Resume page
                </h1>
            </div>
        );
    }
}
