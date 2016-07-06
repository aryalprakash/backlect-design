/**
 * Created by pravesh on 7/6/16.
 */

import React, { Component } from 'react';
import {TitleSubtitle} from './Welcome';


export default class ForgotPassword extends Component{
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
                    <TitleSubtitle title="Forgot your password?"
                                   subtitle="Type your email and we'll reset your password"
                    />
                    <div className="dialog-content" >
                        <input className="input-box" placeholder="Your email"/>
                    </div>
                    <div className="dialog-footer">
                        <a className="dialog-link" href="#">Sign in</a>
                        <button type="submit" className="form-button">Reset Password</button>
                    </div>
                </div>
            </div>
        );
    }
}