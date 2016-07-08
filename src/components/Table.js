import React, { Component } from 'react';
import Header from './Header'

export default class Table extends Component {
    render() {
        return (
            <div className="">
                <Header />
                <div className="table-head light-blue">
                    <div className="table-title">Tables / Workouts</div>
                    <div className="search-box">
                        <input className="input-box" placeholder="Search" type="text" />
                        <img src="../../img/select-project.png" className="search-icon" />
                    </div>
                    <div className="table-options">
                        <div className="table-total">1 of 28</div>
                        <div className="table-paging">
                            <div className=" left-paging">L</div>
                            <div className=" right-paging">R</div>
                        </div>
                        <div className="border-button table-new"><span className="bold">+</span>&nbsp;&nbsp;&nbsp; New Workout</div>
                        <div className="border-button table-settings">S</div>
                    </div>
                </div>
                <div className="table">
                    <div className="table-sidebar light-blue"></div>
                    <div className="table-content"></div>
                </div>
            </div>
        );
    }
}
