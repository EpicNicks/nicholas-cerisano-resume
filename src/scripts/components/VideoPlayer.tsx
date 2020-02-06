
//import ReactPlayer from "react-player";
import React, { Component } from 'react';

export class VideoPlayer extends Component{

    componentDidMount(): void {
        const video = document.querySelector("video");
        if(video !== null)
            video.playbackRate = 10.0;
    }

    render(){
        const url = require("D:\\JetBrains Projects\\WebstormProjects\\nicholas-cerisano-portfolio\\src\\media\\videos\\sample coding clip.mp4");
        return(
            <div className="VideoContainer">
                <div className="VideoPlayer">
                    <video
                        className="video-container video-container-overlay"
                        loop={true}
                        muted={true}
                        data-reactid=".0.1.0.0"
                        autoPlay={true}
                    >
                        <source type="video/mp4" data-reactid=".0.1.0.0.0" src={url}/>
                    </video>
                </div>
                <h1>
                    About Nicholas Cerisano
                </h1>
                <h2>
                    Aspiring Software Developer
                </h2>
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

