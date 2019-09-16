
import React , { Component } from 'react';
import Unity, { UnityContent } from 'react-unity-webgl';

const unityBuildDirPath = process.env.PUBLIC_URL + '/unity/infinite-skater/Build/';
const unityBuildJsonPath = unityBuildDirPath + 'InfiniteSkater_HTML5.json';
const unityLoaderPath = unityBuildDirPath + 'UnityLoader.js';

export class InfiniteRunner extends Component {

    private unityContent = new UnityContent(
        unityBuildJsonPath,
        unityLoaderPath
    );

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return(
            <div className="InfiniteRunner">
                <p>
                    Infinite Runner
                </p>
                <img
                    src={require('D:\\JetBrains Projects\\WebstormProjects\\nicholas-cerisano-portfolio\\src\\media\\images\\infinite-runner clip.gif')}
                    alt={require('D:\\JetBrains Projects\\WebstormProjects\\nicholas-cerisano-portfolio\\src\\media\\images\\infinite-runner clip.gif')}
                />
                {/*Not enough memory...*/}
                {/*<Unity className="Unity_InfiniteRunner" unityContent={this.unityContent} ref={game => this.game = game}/>*/}
            </div>
        );
    }
}