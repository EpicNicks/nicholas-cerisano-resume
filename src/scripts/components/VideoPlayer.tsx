
import ReactPlayer from "react-player";
import React, { Component } from 'react';
import URL from 'url';

export class VideoPlayer extends Component{

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const url = ""//require("../../videos/IBM Tutorial Screen Capture.mp4");
        return(
            <div className="VideoPlayer">
                <ReactPlayer
                    url={url}
                    playing

                />
            </div>
        );
    }
}

