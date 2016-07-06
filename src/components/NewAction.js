/**
 * Created by pravesh on 7/6/16.
 */


import React, { Component } from 'react';
import {TitleSubtitle} from './Welcome';


export default class NewAction extends Component{
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
                    <TitleSubtitle title="New Action"
                                   subtitle="Like, comment, counts are all seen as actions in backlect, and like fields can have Permissions set."
                    />
                    <div className="dialog-content" >
                        <input className="input-box" placeholder="Task"/>
                    </div>
                    <div className="dialog-footer">
                        <button type="submit" className="form-button">Add</button>
                    </div>
                </div>
            </div>
        );
    }
}