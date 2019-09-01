
import React, { Component } from 'react';

export class Resume extends Component{

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return(
            <div className="Resume">
                <p>
                    Resume page
                </p>
            </div>
        );
    }
}
