import React, { Component } from 'react';
import Header from './Header'
import FormBuilder from './FormBuilder'
import Dialog from 'rc-dialog';

export default class Table extends Component {

    constructor(){
        super()
        this.state = {
            visible: false,
            width: 1200,
            destroyOnClose: false,
            center: false
        }

        this.onClick = this.onClick.bind(this)
        this.onClose = this.onClose.bind(this)
        this.onDestroyOnCloseChange = this.onDestroyOnCloseChange.bind(this)
        this.changeWidth = this.changeWidth.bind(this)
        this.center = this.center.bind(this)
    }

    onClick(e) {
        this.setState({
            mousePosition: {
                x: e.pageX,
                y: e.pageY
            },
            visible: true
        });
    }

    onClose(e) {
        console.log(e);
        this.setState({
            visible: false
        });
    }

    onDestroyOnCloseChange(e) {
        this.setState({
            destroyOnClose: e.target.checked
        });
    }

    changeWidth() {
        this.setState({
            width: this.state.width === 600 ? 900 : 600
        });
    }

    center(e) {
        this.setState({
            center: e.target.checked
        });
    }


    render() {

        let dialog;
        if (this.state.visible || !this.state.destroyOnClose) {
            const style = {
                width: '99%',
                padding: 0
            };
            let wrapClassName = '';
            if (this.state.center) {
                wrapClassName = 'center';
            }
            dialog = (
                <Dialog
                    visible={this.state.visible}
                    wrapClassName={wrapClassName}
                    animation="zoom"
                    maskAnimation="fade"
                    style={style}
                    onClose={this.onClose}
                    mousePosition={this.state.mousePosition}
                >
                    <FormBuilder close={this.onClose} />
                </Dialog>
            );
        }

        return (
            <div className="">
                <Header />
            {dialog}
                <div className="table">
                    <div className="table-sidebar light-blue">
                        <div className="table-head">
                            <div className="table-title">Tables &nbsp;&nbsp; <span className="results">|&nbsp;&nbsp;&nbsp;36 Results</span></div>
                        </div>
                        <div className="menu-item-list">
                            <div className="menu-item">
                                <span className="menu-active"></span>
                                <span className="menu-title">Tables</span>
                                <span className="menu-plus">+</span>
                            </div>
                            <div className="menu-subitem">
                                Artists
                            </div>
                            <div className="menu-subitem subitem-active">
                                Workouts
                            </div>
                            <div className="menu-subitem">
                                Photos
                            </div>
                            <div className="menu-subitem">
                                Reviews
                            </div>

                        </div>
                        <div className="menu-item-list">
                            <div className="menu-item"><span className=""></span><span className="menu-title">Analytics</span></div>
                        </div>
                        <div className="menu-item-list">
                            <div className="menu-item"><span className=""></span><span className="menu-title">Users & Permissions</span></div>
                        </div>
                        <div className="menu-item-list">
                            <div className="menu-item"><span className=""></span><span className="menu-title">Settings</span></div>
                        </div>
                    </div>
                    <div className="table-content">
                        <div className="table-head light-blue">
                            <div className="search-box">
                                <input className="input-box" placeholder="Search" type="text" />
                                <img src="../../img/select-project.png" className="search-icon" />
                            </div>
                            <div className="table-options">
                                <div className="border-button table-new" onClick={this.onClick}><span className="bold">+</span>&nbsp;&nbsp;&nbsp; New table</div>
                                <div className="border-button table-settings">S</div>
                            </div>
                        </div>
                        <table className="table-main">
                            <thead>
                            <tr className="table-row">
                                <th className="checkbox"><form>
                                <input type="checkbox" className="checkbox"/>
                                </form></th>
                                <th className="bold">Table Name</th>
                                <th>Objects</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className="table-row"><td className="checkbox"><input type="checkbox" className="checkbox"/></td><td>Contacts</td><td>85</td></tr>
                            <tr className="table-row"><td className="checkbox"><input type="checkbox" className="checkbox"/></td><td>Tasks</td><td>581</td></tr>
                            </tbody>
                            </table>
                        </div>
                    </div>
                </div>
        );
    }
}
