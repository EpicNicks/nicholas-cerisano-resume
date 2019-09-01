
import React, { Component } from 'react';

import './ContactBar.css';

//contact me bar
export class ContactBar extends Component{

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div className="ContactBar">
                <div className="ContactBarLeft">
                    <p>
                        <h1>
                            Contact Me
                        </h1>
                        <h3>
                            epicnicks2.0@gmail.com
                        </h3>
                        <h3>
                            416-556-4060
                        </h3>
                    </p>
                </div>
                <div className="ContactBarRight">
                    <p>
                        <h1>
                            My GitHub:
                        </h1>
                        <h3>
                            <a href="https://github.com/EpicNicks">click here</a>
                        </h3>
                    </p>
                </div>
            </div>
        );
    }
}