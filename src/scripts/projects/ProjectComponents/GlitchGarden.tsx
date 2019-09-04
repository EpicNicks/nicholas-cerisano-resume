
import React, { Component } from 'react';

export class GlitchGarden extends Component{

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return(
            <div className="GlitchGarden">
                <p>
                    Glitch Garden
                </p>
                <img
                    src={require("C:\\Users\\epicn\\WebstormProjects\\nicholas-cerisano-portfolio\\src\\media\\images\\glitch garden demo gif.gif")}
                    alt={require("C:\\Users\\epicn\\WebstormProjects\\nicholas-cerisano-portfolio\\src\\media\\images\\glitch garden demo gif.gif")}
                />
            </div>
        );
    }
}