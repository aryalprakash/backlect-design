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
                            <div className="table-title">Users</div>
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

                                <div className="border-button table-new std-size-160">Manage Roles</div>
                                <div className="border-button table-new std-size-160"><span className="bold">+</span>&nbsp;&nbsp;&nbsp; New User</div>
                            </div>
                        </div>
                        <div className="table-main">
                            <div className="sub-title">
                                Invited Users
                            </div>
                            <div className="divider"></div>
                            <div className="user-row">
                                <div className="user-profile">
                                    <div className="user-icon-container">
                                        <img className="user-icon" />
                                    </div>
                                    <div className="user-name">Dave McClaure</div>
                                    <div className="">Invitaion sent: 9 days ago</div>
                                </div>
                                <div className="user-status">
                                    <a className="blue-link" href="#">Revoke</a><a className="blue-link" href="#">Resend Invitation</a>
                                </div>
                            </div>
                            <div className="sub-title">
                            Active Users
                            </div>
                            <div className="divider"></div>
                            <div className="user-row">
                                <div className="user-profile">
                                    <div className="user-icon-container">
                                        <img src="https://lh5.googleusercontent.com/-dNkyIIMgHs0/AAAAAAAAAAI/AAAAAAAAAAA/CaLYKTknoaQ/s128-c-k/photo.jpg" className="user-icon" />
                                    </div>
                                    <div className="user-name">Jimmi Andersen</div>
                                    <div className="">Invitaion sent: 9 days ago</div>
                                </div>
                                <div className="user-status">
                                    <div className="button button-user light-blue">ADMIN</div>
                                </div>
                            </div>
                            <div className="user-row">
                                <div className="user-profile">
                                    <div className="user-icon-container">
                                        <img src="https://lh5.googleusercontent.com/-dNkyIIMgHs0/AAAAAAAAAAI/AAAAAAAAAAA/CaLYKTknoaQ/s128-c-k/photo.jpg" className="user-icon" />
                                    </div>
                                    <div className="user-name">Manoj Ghimire</div>
                                    <div className="">Invitaion sent: 9 days ago</div>
                                </div>
                                <div className="user-status">
                                    <div className="button button-user pink">FOUNDER</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
