
import React, { Component } from 'react';
import Unity, { UnityContent } from 'react-unity-webgl';

const unityBuildDirPath = process.env.PUBLIC_URL + '/unity/space-shooter/Build/';
const unityBuildJsonPath = unityBuildDirPath + 'SpaceInvadersClone_HTML5.json';
const unityLoaderPath = unityBuildDirPath + 'UnityLoader.js';

export class SpaceShooter extends Component{

    private unityContent = new UnityContent(
        unityBuildJsonPath,
        unityLoaderPath
    );

    private game : Unity | null = null;

    // kill unity instance (crappy method but it works -_(._.)_- )
    // componentWillUnmount(): void {
    //     if(this.game !== null) {
    //         let path : string = window.location.pathname;
    //         window.location.assign('/nicholas-cerisano-resume');
    //         if(document.readyState === 'interactive') {
    //             window.location.assign(path);
    //             window.onload = null;
    //         }
    //     }
    // }

    render(){
        return (
            <div className="SpaceShooter">
                <h1>
                    Space Shooter
                </h1>
                <p>
                    This is a project I worked on following the Udemy course: Complete Unity C# Developer: Learn to code by making games
                    I later designed it around being played on a phone.
                    Feel free to give it a try below by clicking &lt;Start&gt;.<br/><br/>
                    Controls: Move the mouse; your ship (bottom) will move toward it.
                </p>
                <Unity className="Unity_SpaceShooter" unityContent={this.unityContent} ref={game => this.game = game}/>
                {/*{<img*/}
                {/*    src={require("D:\\JetBrains Projects\\WebstormProjects\\nicholas-cerisano-portfolio\\src\\media\\images\\space shooter demo gif.gif")}*/}
                {/*    alt={require("D:\\JetBrains Projects\\WebstormProjects\\nicholas-cerisano-portfolio\\src\\media\\images\\space shooter screenshot.jpg")}*/}
                {/*/>}*/}
            </div>
        )
    }
}