
import React, { Component } from 'react';

export class Portfolio extends Component{

    render(){
        return (
            <div className="PortfolioProject">
                <h1>
                    This Portfolio
                </h1>
                <h3>
                    I built this website myself in React using TypeScript.<br/>
                    You can check out the code on my GitHub using the GitHub icon in the 'Contact Me' bar below, or by
                    clicking <a href="https://github.com/epicnicks" target="_blank" rel="noopener noreferrer">here</a>.<br/>
                </h3>
                <div className="PortfolioProjectLogos">
                    <img
                        className="ReactLogo"
                        src={require("D:\\JetBrains Projects\\WebstormProjects\\nicholas-cerisano-portfolio\\src\\media\\images\\react-logo.png")}
                        alt={require("D:\\JetBrains Projects\\WebstormProjects\\nicholas-cerisano-portfolio\\src\\media\\images\\react-logo.png")}
                    />
                    <img
                        className="TSLogo"
                        src={require("D:\\JetBrains Projects\\WebstormProjects\\nicholas-cerisano-portfolio\\src\\media\\images\\typescript-logo.png")}
                        alt={require("D:\\JetBrains Projects\\WebstormProjects\\nicholas-cerisano-portfolio\\src\\media\\images\\typescript-logo.png")}
                    />
                </div>
                <img
                    //get an image of the finished homepage
                    //src={}
                    //alt={}
                />
            </div>
        );
    }
}