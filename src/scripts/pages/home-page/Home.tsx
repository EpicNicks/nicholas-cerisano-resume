
import React, { Component } from 'react';

import { VideoPlayer } from "../../components/VideoPlayer";
import "./Home.css";
import {ContactBar} from "../../contact-bar/ContactBar";

export class Home extends Component{

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return(
            <div className="Home">
                {/*<p>*/}
                {/*    Home page*/}
                {/*</p>*/}
                <VideoPlayer/>
                <ContactBar/>
            </div>
        );
    }
}