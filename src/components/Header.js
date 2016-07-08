import React, { Component } from 'react';

export default class App extends Component {
    render() {
        return (
            <div className="header-container">
                <div className="header-project">
                    <div className="logo-box logo center-box-logo">B</div>
                    <div className="select-project">
                        <div className="current-project">Current Project</div>
                        <div className="projects-lists">
                        <div className="current-project-title">First Project <img src="../../img/select-project.png" /></div>
                        </div>
                    </div>
                </div>
                <div className="header-profile">

                </div>
            </div>
        );
    }
}
