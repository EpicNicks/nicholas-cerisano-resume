
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
                <h1>
                    Glitch Garden
                </h1>
                <p>
                </p>
                {/*not enough memory (crashes)*/}
                {/*<Unity className="Unity_GlitchGarden" unityContent={this.unityContent}/>*/}
                <img
                    src={require("D:\\JetBrains Projects\\WebstormProjects\\nicholas-cerisano-portfolio\\src\\media\\images\\glitch garden demo gif.gif")}
                    alt={require("D:\\JetBrains Projects\\WebstormProjects\\nicholas-cerisano-portfolio\\src\\media\\images\\glitch garden demo gif.gif")}
                />
            </div>
        );
    }
}