/**
 * Created by prakash on 7/18/16.
 */

import React, { Component } from 'react';
import {TitleSubtitle} from './Welcome';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Switch from 'rc-switch';

require('../../css/switch.css');

class TableConfig extends Component{
    onChange(value) {
        console.log('switch checked:' + value);
    }

    render(){
        return (
            <div className="dialog-content" >
                <div className="dialog-field">
                    <div className="dialog-field-label"><span className="dialog-required-asterisk">*</span>
                        <label className="">Field Type</label>
                    </div>
                    <input className="input-box dialog-input-box" placeholder="Text Field" style={{"flex": 6}}/>
                </div>

                <div className="dialog-field">
                    <div className="dialog-field-label">
                        <span className="dialog-required-asterisk">*</span>
                        <label className="">Name</label>
                    </div>

                    <input className="input-box dialog-input-box" placeholder="Concert" style={{"flex": 6}}/>
                </div>

                <div className="dialog-field">
                    <span className="dialog-field-label" >Required</span>
                    <div style={{"flex": 6}}>
                        <Switch onChange={this.onChange}
                        />
                    </div>
                </div>
            </div>



        )
    }
}

class Permissions extends Component{
    render(){
        return (
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

        )
    }
}

export default class TableAdd extends Component{
    constructor(){
        super();
        this.states = {
            "style": {
                "width": 565,
                "height": "inherit"
            },
            "tabs":{
                "width":"50%",
                "borderRadius": 0
            }
        }
    }

    render() {
        return (
            <div className="bg bg-dark">
                <div className="dialog-box" style={this.states.style}>
                    <TitleSubtitle title="New Table"
                        subtitle="Give your new Table a name and you are set. If you are building apps, you can set permission levels as well."
                    />

                    <Tabs
                        onSelect={this.handleSelect}
                        selectedIndex={0}
                    >
                        <TabList>
                            <Tab style={this.states.tabs}>TABLE</Tab>
                            <Tab style={this.states.tabs}>PERMISSIONS</Tab>
                        </TabList>

                        <TabPanel>
                            <TableConfig />
                        </TabPanel>

                        <TabPanel>
                            <Permissions />
                        </TabPanel>


                    </Tabs>
                    <div className="dialog-footer">
                        <button type="submit" className="form-button dialog-form-button">Save</button>
                    </div>


                </div>
            </div>
        );
    }
}