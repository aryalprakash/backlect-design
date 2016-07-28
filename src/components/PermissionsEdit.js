/**
 * Created by prakash on 7/6/16.
 */

import React, { Component } from 'react';
import {TitleSubtitle} from './Welcome';


export default class PermissionsEdit extends Component{
    constructor(){
        super();
        this.states = {
            "style": {
                "width": 565,
                "height": "inherit"
            }
        }
    }

    render() {
        return (
            <div className="bg bg-dark">
                <div className="dialog-box" style={this.states.style}>
                    <TitleSubtitle title="New Role"
                        subtitle="Roles can be used to delegate access permissions to your backlect admins."
                    />
                    <div className="dialog-content" >
                        <div className="dialog-field">
                            <div className="dialog-field-label">
                                <label className="">Read</label>
                            </div>
                            <select className="input-box dialog-input-box" placeholder="140" style={{"flex": 6}}>
                                <option className="select-options">ALL(everyone is allowed to read)</option>
                                <option className="select-options">NO</option>
                                <option>MINE(only content-creator can update)</option>
                                <option>NONE(nobody)</option>
                            </select>
                        </div>

                        <div className="dialog-field">
                            <div className="dialog-field-label">
                                <label className="">Write</label>
                            </div>
                            <select className="input-box dialog-input-box" placeholder="140" style={{"flex": 6}}>
                                <option className="select-options">ALL(everyone is allowed to read)</option>
                                <option className="select-options">NO</option>
                                <option>MINE(only content-creator can update)</option>
                                <option>NONE(nobody)</option>
                            </select>
                        </div>

                        <div className="dialog-field">
                            <div className="dialog-field-label">
                                <label className="">Put</label>
                            </div>

                            <select className="input-box dialog-input-box" placeholder="140" style={{"flex": 6}}>
                                <option className="select-options">ALL(everyone is allowed to read)</option>
                                <option className="select-options">NO</option>
                                <option>MINE(only content-creator can update)</option>
                                <option>NONE(nobody)</option>
                            </select>
                        </div>

                        <div className="dialog-field">
                            <div className="dialog-field-label">
                                <label className="">Delete</label>
                            </div>

                            <select className="input-box dialog-input-box" placeholder="140" style={{"flex": 6}}>
                                <option className="select-options">ALL(everyone is allowed to read)</option>
                                <option className="select-options">NO</option>
                                <option>MINE(only content-creator can update)</option>
                                <option>NONE(nobody)</option>
                            </select>
                        </div>

                    </div>
                    <div className="dialog-footer">
                        <button type="submit" className="form-button dialog-form-button">Add</button>
                    </div>
                </div>
            </div>
        );
    }
}