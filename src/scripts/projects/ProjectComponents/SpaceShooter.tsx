
import React, { Component } from 'react';

export class SpaceShooter extends Component{

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div className="SpaceShooter">
                <p>
                    Space Shooter
                </p>
            </div>
        )
    }
}