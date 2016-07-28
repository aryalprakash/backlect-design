/**
 * Created by pravesh on 7/6/16.
 */


import React, { Component } from 'react';
import {TitleSubtitle} from './Welcome';


export default class ConfirmDelete extends Component{
    constructor(){
        super();
        this.states = {
            "style": {
                "width": 430,
                "height": 261
            },
            "table_name" : "Contacts"
        }
    }

    render() {
        return (
            <div className="bg bg-dark">
                <div className="dialog-box" style={this.states.style}>
                    <TitleSubtitle title={'Delete "' + this.states.table_name + ' " table'}
                                   subtitle="Are you sure you want to delete? Deleting this table will also delete all it’s
                                    content – and is not recoverable! Type delete and press the button"
                                   style={{"background-color": "#ff0080"}}
                    />
                    <div className="dialog-content">
                        <input className="input-box dialog-input-box" placeholder="Type 'delete' to continue.."/>
                    </div>
                    <div className="dialog-footer">
                        <button type="submit" className="form-button dialog-form-button dialog-form-button-danger">Delete</button>
                    </div>
                </div>
            </div>
        );
    }
}