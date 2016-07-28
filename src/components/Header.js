import React, { Component } from 'react';



class Dropdown extends Component {
    render(){
        return(<div style={this.props.style.dropdown}>
            <div className="drop-option">XRZR</div>
            <div className="drop-option">Spotify</div>
            <div className="drop-option">Revuze</div>
            <div className="drop-option">Salesforce</div>
            <div className="drop-option">nLocate</div>
            <div className="drop-option pink">NEW PROJECT</div>
        </div>)
    }
}

export default class App extends Component {

    constructor(){
        super();
        this.state = {
            "dropdown":{
                "width": 250,
                "background": "#f9f7f7",
                "position": "absolute",
                "zIndex": 1000,
                "left": 0,
                "top": 85,
                "position": "absolute",
                "color": "#1b1945",
                "fontSize": 18
            },
            "display": false,
            "dropImg":{
                cursor: "pointer"
            }
        }}

    showDrop(){
        this.setState({
            display: !this.state.display
        })
    }

    render() {
        return (
            <div className="header-container">
                <div className="header-project">
                    <div className="logo-box logo center-box-logo">B</div>
                    <div className="select-project">
                        <div className="current-project">Current Project</div>
                        <div className="projects-lists">
                        <div className="current-project-title">First Project <img style={this.state.dropImg} src="../../img/select-project.png" onClick={_=>this.showDrop()} /></div>
                        </div>
                    </div>
                {this.state.display?<Dropdown style={this.state} />:null}
                </div>
                <div className="header-profile">

                </div>
            </div>
        );
    }
}
