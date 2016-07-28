/**
 * Created by pravesh on 7/8/16.
 */

import React, { Component } from 'react';
import {TitleSubtitle} from './Welcome';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Switch from 'rc-switch';

require('../../css/switch.css');

class FieldConfig extends Component{
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

class FieldValidation extends Component{
    render(){
        return (
            <div className="dialog-content" >
                <div className="dialog-field">
                    <div className="dialog-field-label">
                        <label className="">Min Length</label>
                    </div>
                    <input className="input-box dialog-input-box" placeholder="3" style={{"flex": 6}}/>
                </div>

                <div className="dialog-field">
                    <div className="dialog-field-label">
                        <label className="">Max Length</label>
                    </div>

                    <input className="input-box dialog-input-box" placeholder="140" style={{"flex": 6}}/>
                </div>

                <div className="dialog-field">
                    <div className="dialog-field-label">
                        <label className="">Regex</label>
                    </div>

                    <input className="input-box dialog-input-box" placeholder="apples" style={{"flex": 6}}/>
                </div>

            </div>

        )
    }
}

export default class FieldSettings extends Component{
    constructor(){
        super();
        this.states = {
            "style": {
                "width": 565,
                "height": 426
            }
        }
    }

    render() {
        return (
            <div className="bg bg-dark">
                <div className="dialog-box" style={this.states.style}>
                    <TitleSubtitle title="FIELD SETTINGS"
                                   subtitle="You can set additional settings to fields like validation, and permissions."
                    />

                    <Tabs
                        onSelect={this.handleSelect}
                        selectedIndex={0}
                    >
                        <TabList>
                            <Tab>FIELD CONFIG</Tab>
                            <Tab>VADILATION</Tab>
                            <Tab>ADVANCED</Tab>
                        </TabList>

                        <TabPanel>
                            <FieldConfig/>
                        </TabPanel>

                        <TabPanel>
                            <FieldValidation/>
                        </TabPanel>

                        <TabPanel>
                            <h2>Tab here</h2>
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