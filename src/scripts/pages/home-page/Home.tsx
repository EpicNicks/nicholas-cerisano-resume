
import React, { Component } from 'react';

import { VideoPlayer } from "../../components/VideoPlayer";
import "./Home.css";
//import { ContactBar } from "../../contact-bar/ContactBar";

export class Home extends Component{

    render(){
        return(
            <div className="Home">
                {/*<p>*/}
                {/*    Home page*/}
                {/*</p>*/}
                <VideoPlayer/>
                {/*<ContactBar/>*/}
            </div>
        );
    }
}