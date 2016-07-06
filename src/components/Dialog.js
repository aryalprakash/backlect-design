/**
 * Created by pravesh on 7/6/16.
 */

import React, { Component } from 'react';

export default class Dialog extends Component {
    constructor() {

    }

    render() {
        return (
            <div className="bg">
                <div className="center-box center-box-welcome">
                    <div className="dialog-top-bar">
                        <div className="title2">Hi Jimmy, Add your first table.</div>
                        <div className="dialog-top-bar-description">
                            Tables can store form input, videos, photos, text, app data etc. Example table name is Task to store tasks
                        </div>
                    </div>
                    <input className="Task"></input>
                </div>
            </div>
        );
    }
}