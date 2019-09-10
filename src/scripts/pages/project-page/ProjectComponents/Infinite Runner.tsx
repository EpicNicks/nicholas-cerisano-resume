
import React , { Component } from 'react';

export class InfiniteRunner extends Component {

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return(
            <div className="InfiniteRunner">
                <p>
                    Infinite Runner
                </p>
                <img
                    //src={require("")} get some gif
                    //alt={require("")} get some screen-shot
                />
            </div>
        );
    }
}