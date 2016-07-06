/**
 * Created by pravesh on 7/6/16.
 */

import React, { Component } from 'react';
import {TitleSubtitle} from './Welcome';


export default class Login extends Component{
    constructor(){
        super();
        this.states = {
            "style": {
                "width": 430,
                "height": 332
            }
        }
    }

    render() {
        return (
            <div className="bg">
                <div className="dialog-box" style={this.states.style}>
                    <TitleSubtitle title="Login to your account"
                                   subtitle="Tables can store form input, videos, photos, text, app data etc. Example table name is Task to store tasks"
                                   style={{flex: 3}}
                    />
                    <div className="dialog-content" style={{flex: 3}}>
                        <input className="input-box" placeholder="Username"/>
                        <input className="input-box" placeholder="Password"/>
                    </div>
                    <div className="dialog-footer">
                        <a className="dialog-link" href="#">Forgot Password?</a>
                        <button type="submit" className="form-button">Sign In</button>
                    </div>
                </div>
            </div>
        );
    }
}