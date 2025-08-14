import React, { Component } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

const unityBuildDirPath =
  process.env.PUBLIC_URL + "/unity/infinite-skater/Build/";
const unityBuildJsonPath = unityBuildDirPath + "InfiniteSkater_HTML5.json";
const unityLoaderPath = unityBuildDirPath + "UnityLoader.js";

export class InfiniteRunner extends Component {
  // private unityContent = new UnityContent(
  //     unityBuildJsonPath,
  //     unityLoaderPath
  // );

  render() {
    return (
      <div className="InfiniteRunner">
        <h1>Infinite Runner</h1>
        <img
          src={require("../../../../../src/media/images/infinite-runner clip.gif")}
          alt={require("../../../../../src/media/images/infinite-runner clip.gif")}
        />
        {/*Not enough memory...*/}
        {/*<Unity className="Unity_InfiniteRunner" unityContent={this.unityContent} ref={game => this.game = game}/>*/}
      </div>
    );
  }
}
