/**
 * Created by pravesh on 7/6/16.
 */
import React, { Component } from 'react';

class TitleSubtitle extends Component {
    render(){
        return (
            <div className="dialog-top-bar">
                <div className="title2">{this.props.title}</div>
                <div className="dialog-top-bar-description">
                    {this.props.subtitle}
                </div>
            </div>
        )
    }
}


export default class Welcome extends Component {
    render() {
        return (
            <div className="bg">
                <div className="center-box center-box-welcome">
                    <TitleSubtitle title="Hi Jimmy, Add your first table."
                                   subtitle="Tables can store form input, videos, photos, text, app data etc. Example table name is Task to store tasks"/>
                    <div className="dialog-top-bar dialog-content">
                        <input></input>
                    </div>
                </div>
            </div>
        );
    }
}
//
// <div className="center-contents">
//     <div className="center-base">
//         <div className="Top-Bar">Hi Jimmi, Add your first table</div>
//         <div className="title1">Welcome to Backlect</div>
//         <div className="para-text">The best Cloud Database to store your data. Works great for team collaboration and mobile app projects with million of users.</div>
//         <div className="title2">Did you know</div>
//         <div className="para-text">It’s built on Google Cloud Infrastructure
//             Can scale to millions of millions inputs
//             Automatically generates REST APIs</div>
//     </div>
//     <div className="title1">aass</div>
//
// </div>