
//import ReactPlayer from "react-player";
import React, { Component } from 'react';
import "../home/Home.css";

export class VideoPlayer extends Component{

    componentDidMount(): void {
        const video = document.querySelector("video");
        if(video !== null)
            video.playbackRate = 10.0;
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const url = require("C:\\Users\\epicn\\WebstormProjects\\nicholas-cerisano-portfolio\\src\\media\\videos\\2019-02-07 22-34-08.mp4");
        return(
            <div className="VideoContainer">
                <div className="VideoPlayer">
                    <video
                        className="video-container video-container-overlay"
                        loop={true}
                        muted={false}
                        data-reactid=".0.1.0.0"
                        autoPlay
                        width="80%"
                        height="80%"
                    >
                        <source type="video/mp4" data-reactid=".0.1.0.0.0" src={url}/>
                    </video>
                </div>
                <p>
                    About Nicholas Cerisano
                </p>
            </div>
        );
    }
}

/*
<ReactPlayer
url={url}
playing
loop={true}
width="80%"
height="80%"
/>
 */

