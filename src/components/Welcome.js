/**
 * Created by pravesh on 7/6/16.
 */
import React, { Component } from 'react';

export class TitleSubtitle extends Component {
    render(){
        return (
            <div className="dialog-header" style={this.props.style}>
                <div className="dialog-header-title">{this.props.title}</div>
                <div className="dialog-header-description">
                    {this.props.subtitle}
                </div>
            </div>
        )
    }
}


export default class Welcome extends Component {
    constructor(){
        super();
        this.states = {
            "style": {
                "width": 430,
                "height": 261
            }
        }
    }

    render() {
        return (
            <div className="bg">
                <div className="dialog-box" style={this.states.style}>
                    <TitleSubtitle title="Hi Jimmy, Add your first table."
                                   subtitle="Tables can store form input, videos, photos, text, app data etc. Example table name is Task to store tasks"/>
                    <div className="dialog-content">
                        <input className="input-box dialog-input-box" placeholder="Task"/>
                    </div>
                    <div className="dialog-footer">
                        <button type="submit" className="form-button dialog-form-button">Next</button>
                    </div>
                </div>
            </div>
        );
    }
}