
import React, { Component } from 'react';

export class GameDay extends Component{

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return(
            <div className="GameDay">
                <h1>
                    Game Day
                </h1>
                <p>
                    A game I worked on in grade 12 for my religion class's 'Game Day'.<br/>

                </p>
                <div className="GameDayImages">
                    <img
                        src={require("../../../../media/images/Team2Capture.png")}
                        alt={require("../../../../media/images/Team2Capture.png")}
                    />
                    <img
                        src={require("../../../../media/images/DevConsole.png")}
                        alt={require("../../../../media/images/DevConsole.png")}
                    />
                </div>
            </div>
        );
    }
}
