import React, { Component } from 'react';
import Header from './Header'
import Switch from 'rc-switch';

export default class Users extends Component {
    onChange(value) {
        console.log('switch checked:' + value);
    }
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
                            </div>
                        </div>
                        <table className="table-main">
                            <thead>
                                <tr className="table-row">
                                    <th className="checkbox"><form>
                                        <input type="checkbox" className="checkbox"/>
                                    </form></th>
                                    <th className="bold">Table Permissions</th>
                                    <th className="bold">Read</th>
                                    <th className="bold">Write</th>
                                    <th className="bold">Put</th>
                                    <th className="bold">Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="table-row">
                                    <td className="checkbox"><input type="checkbox" className="checkbox"/></td>
                                    <td>Contacts</td>
                                    <td className=""><div className="button button-role pink">ALL</div></td>
                                    <td className=""><div className=""> <Switch onChange={this.onChange} /></div></td>
                                    <td className=""><div className="button button-role light-blue">MINE</div></td>
                                    <td className=""><div className="button button-role orchid">GROUP</div></td>
                                </tr>

                                <tr className="table-row">
                                    <td className="checkbox"><input type="checkbox" className="checkbox"/></td>
                                    <td>Tasks</td>
                                    <td className=""><div className="button button-role pink">ALL</div></td>
                                    <td className=""><div className=""> <Switch onChange={this.onChange} /></div></td>
                                    <td className=""><div className="button button-role orchid">GROUP</div></td>
                                    <td className=""><div className="button button-role pink">ALL</div></td>
                                </tr>

                                <tr className="table-row">
                                    <td className="checkbox"><input type="checkbox" className="checkbox"/></td>
                                    <td>Workout</td>
                                    <td className=""><div className="button button-role pink">ALL</div></td>
                                    <td className=""><div className=""> <Switch onChange={this.onChange} /></div></td>
                                    <td className=""><div className="button button-role light-blue">MINE</div></td>
                                    <td className=""><div className="button button-role orchid">GROUP</div></td>
                                </tr>
                                </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}
