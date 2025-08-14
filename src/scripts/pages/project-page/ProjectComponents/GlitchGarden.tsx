
import React, { Component } from 'react';
import Unity, { UnityContent } from 'react-unity-webgl';

const unityBuildDirPath = process.env.PUBLIC_URL + '/unity/glitch-garden/Build/';
const unityBuildJsonPath = unityBuildDirPath + 'GlitchGarden_HTML5.json';
const unityLoaderPath = unityBuildDirPath + 'UnityLoader.js';

export class GlitchGarden extends Component{

    unityContent = new UnityContent(
        unityBuildJsonPath,
        unityLoaderPath
    );

    render(){
        return(
            <div className="GlitchGarden">
                <div className="GlitchGardenBGImage"/>
                <div>
                    <h1>
                        Glitch Garden
                    </h1>
                    <p>
                        Another game created in the Udemy course: Complete Unity C# Developer: Learn to code by making games.<br/>
                        Glitch Garden is a 'Tower' Defence game based on Plants vs Zombies.<br/>
                        The goal is to keep the enemies from making it to the left side of the screen.<br/>
                        Below is a gif of some gameplay of the first level.
                    </p>
                    {/*not enough memory (crashes)*/}
                    {/*<Unity className="Unity_GlitchGarden" unityContent={this.unityContent}/>*/}
                    <img
                        src={require("../../../../../src/media/images/glitch garden demo gif.gif")}
                        alt={require("../../../../../src/media/images/glitch garden demo gif.gif")}
                    />
                </div>
            </div>
        );
    }
}