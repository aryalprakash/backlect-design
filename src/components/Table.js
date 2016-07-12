import React, { Component } from 'react';
import Header from './Header'

export default class Table extends Component {
    render() {
        return (
            <div className="">
                <Header />
                <div className="table-head light-blue">
                    <div className="table-title">Tables &nbsp;&nbsp; <span className="results">|&nbsp;&nbsp;&nbsp;36 Results</span></div>
                    <div className="search-box">
                        <input className="input-box" placeholder="Search" type="text" />
                        <img src="../../img/select-project.png" className="search-icon" />
                    </div>
                    <div className="table-options">

                        <div className="border-button table-new"><span className="bold">+</span>&nbsp;&nbsp;&nbsp; New table</div>
                        <div className="border-button table-settings">S</div>
                    </div>
                </div>
                <div className="table">
                    <div className="table-sidebar light-blue">
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
