/**
 * Created by pravesh on 7/6/16.
 */

import React, { Component } from 'react';
import {TitleSubtitle} from './Welcome';


export default class RoleAdd extends Component{
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
                    <TitleSubtitle title="New Role"
                                   subtitle="Roles can be used to delegate access permissions to your backlect admins."
                    />
                    <div className="dialog-content" >
                        <input className="input-box dialog-input-box" placeholder="New Role"/>
                    </div>
                    <div className="dialog-footer">
                        <button type="submit" className="form-button dialog-form-button">Add</button>
                    </div>
                </div>
            </div>
        );
    }
}