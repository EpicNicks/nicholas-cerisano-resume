
import React, { Component } from 'react';

export class GameDay extends Component{

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return(
            <div className="GameDay">
                <h1>
                    Game Day
                </h1>
                <img
                    // src={require("")}
                    // alt={require("")}
                />
            </div>
        );
    }
}
