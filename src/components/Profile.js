/**
 * Created by prakash on 7/6/16.
 */

import React, { Component } from 'react';
import {TitleSubtitle} from './Welcome';
import Switch from 'rc-switch';

import Dropzone from 'react-dropzone';

let dropStyle ={
    display: 'flex',
    flex: 6,
    alignItems: 'center',
    justifyContent: 'center',
    height: 38,
    borderWidth: 2,
    borderColor: '#666',
    borderStyle: 'dashed',
    borderRadius: 5
}

require('../../css/switch.css');


export default class Profile extends Component{
    constructor(){
        super();
        this.states = {
            "style": {
                "width": 565,
                "height": "inherit"
            },
            "sublabel":{
                color: "#7f8fa4",
                fontSize: 12,
                width: "100%"
            }
        }
    }
    onChange(value) {
        console.log('switch checked:' + value);
    }

    render() {
        return (
            <div className="bg bg-dark">
                <div className="dialog-box" style={this.states.style}>
                    <TitleSubtitle title="Profile Settings"
                        subtitle="Welcome back Jimmi"
                    />
                    <div className="dialog-content" >
                        <div className="dialog-field">
                            <div className="dialog-field-label">
                                <label className="">Name</label>
                            </div>
                            <input className="input-box dialog-input-box" placeholder="Jimmi Andersen" style={{"flex": 6}} />
                        </div>

                        <div className="dialog-field">
                            <div className="dialog-field-label">
                                <label className="">Email</label>
                            </div>
                            <input className="input-box dialog-input-box" placeholder="jimmi@andersen.com" style={{"flex": 6}}/>
                        </div>

                        <div className="dialog-field">
                            <div className="dialog-field-label">
                                <label className="">Picture</label>
                                <div style={this.states.sublabel}>JPG, max. 1MB</div>
                            </div>
                            <Dropzone style={dropStyle} >
                                <div>Browse Image</div>
                            </Dropzone>
                        </div>

                        <div className="dialog-field">
                            <div className="dialog-field-label">
                                <label className="">View All Fields</label>
                            </div>
                            <div style={{"flex": 6}}>
                                <Switch onChange={this.onChange}
                                />
                            </div>
                        </div>

                    </div>
                    <div className="dialog-footer">
                        <button type="submit" className="form-button dialog-form-button">Save</button>
                    </div>
                </div>
            </div>
        );
    }
}