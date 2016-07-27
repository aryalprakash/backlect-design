import React, { Component } from 'react';
import Header from './Header'

export default class Users extends Component {
    render() {
        return (
            <div className="">
                <Header />
                <div className="table">
                    <div className="table-sidebar light-blue">
                        <div className="table-head">
                            <div className="table-title">Users / Roles</div>
                        </div>
                        <div className="menu-item-list">
                            <div className="menu-item">
                                <span className="menu-status"></span>
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
                            <div className="menu-item"><span className="menu-status"></span><span className="menu-title">Analytics</span></div>
                        </div>
                        <div className="menu-item-list">
                            <div className="menu-item"><span className="menu-status"></span><span className="menu-title">Users & Permissions</span></div>
                        </div>
                        <div className="menu-item-list">
                            <div className="menu-item"><span className="menu-status menu-active"></span><span className="menu-title">Settings</span></div>
                            <div className="menu-subitem">
                            Users & Permissions
                            </div>
                            <div className="menu-subitem">
                            Roles
                            </div>
                        </div>
                    </div>
                    <div className="table-content">
                        <div className="table-head light-blue">
                            <div className="search-box">
                                <input className="input-box" placeholder="Search" type="text" />
                                <img src="../../img/select-project.png" className="search-icon" />
                            </div>
                            <div className="table-options">
                                <div className="border-button table-new std-size-160"><span className="bold">+</span>&nbsp;&nbsp;&nbsp; New Role</div>
                            </div>
                        </div>
                        <table className="table-main">
                            <thead>
                                <tr className="table-row">
                                    <th className="checkbox"><form>
                                        <input type="checkbox" className="checkbox"/>
                                    </form></th>
                                    <th className="bold">User Roles</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="table-row"><td className="checkbox"><input type="checkbox" className="checkbox"/></td><td>Admin</td></tr>
                                <tr className="table-row"><td className="checkbox"><input type="checkbox" className="checkbox"/></td><td>Sales Rep.</td></tr>
                                <tr className="table-row"><td className="checkbox"><input type="checkbox" className="checkbox"/></td><td>Content Writer</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}
