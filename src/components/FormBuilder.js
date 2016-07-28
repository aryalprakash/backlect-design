import 'rc-dialog/assets/index.css';
import 'react-star-rating/dist/css/react-star-rating.min.css'
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Dialog from 'rc-dialog';
import StarRating from 'react-star-rating';
import Dropzone from 'react-dropzone';

let dropStyle ={
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
    borderWidth: 2,
    borderColor: '#666',
    borderStyle: 'dashed',
    borderRadius: 5
}


export default class FormBuilder extends Component{

    render() {
        return (<div className="new-container dark-blue">
            <div className="header-container">
                <div className="header-project header-dialog">
                    <div className="back-button" onClick={this.props.close}>
                        <img src="../../img/select-project.png" />
                    </div>
                    <div className="dialog-head-title">Workouts</div>
                </div>
                <div className="header-profile">
                    <div className="user-icon-container">
                        <img src="https://lh5.googleusercontent.com/-dNkyIIMgHs0/AAAAAAAAAAI/AAAAAAAAAAA/CaLYKTknoaQ/s128-c-k/photo.jpg" className="user-icon" />
                    </div>
                </div>
            </div>
            <div className="dialog-main-content form-builder">
                <div className="dialog-content-head form-builder-head dark-blue-color">
                    <div className="form-builder-title">Add Fields</div>
                    <div className="form-builder-alert pink">Add form fields from the sidebar. Change fields settings, by clicking on the left settings-icon
                        <div className="button-group">
                            <div className="border-button table-new">Cancel</div>
                            <div className="border-button table-new">Save</div>
                            <div className="border-button table-settings">S</div>
                        </div>
                    </div>
                </div>
                <div className="dialog-sidebar dark-blue">
                    <div className="form-item">
                        <img className="form-item-icon" src="../../img/today@2x.png"/>
                        <div className="form-item-caption">TEXT</div>
                    </div>
                    <div className="form-item">
                        <img className="form-item-icon" src="../../img/map@2x.png"/>
                        <div className="form-item-caption">NUMBER</div>
                    </div>
                    <div className="form-item">
                        <img className="form-item-icon" src="../../img/map@2x.png"/>
                        <div className="form-item-caption">DATE</div>
                    </div>
                    <div className="form-item">
                        <img className="form-item-icon" src="../../img/map@2x.png"/>
                        <div className="form-item-caption">TIME</div>
                    </div>
                    <div className="form-item">
                        <img className="form-item-icon" src="../../img/map@2x.png"/>
                        <div className="form-item-caption">IMAGE</div>
                    </div>
                    <div className="form-item">
                        <img className="form-item-icon" src="../../img/map@2x.png"/>
                        <div className="form-item-caption">LOCATION</div>
                    </div>
                    <div className="form-item">
                        <img className="form-item-icon" src="../../img/map@2x.png"/>
                        <div className="form-item-caption">RELATION</div>
                    </div>
                    <div className="form-item">
                        <img className="form-item-icon" src="../../img/map@2x.png"/>
                        <div className="form-item-caption">RATING</div>
                    </div>
                    <div className="form-item">
                        <img className="form-item-icon" src="../../img/map@2x.png"/>
                        <div className="form-item-caption">SELECTION</div>
                    </div>
                    <div className="form-item">
                        <img className="form-item-icon" src="../../img/map@2x.png"/>
                        <div className="form-item-caption">PROGRESS</div>
                    </div>
                    <div className="form-item">
                        <img className="form-item-icon" src="../../img/map@2x.png"/>
                        <div className="form-item-caption">CURRENCY</div>
                    </div>
                    <div className="form-item">
                        <img className="form-item-icon" src="../../img/map@2x.png"/>
                        <div className="form-item-caption">ACTION</div>
                    </div>


                </div>
                <div className="dialog-center-content">

                    <div className="dialog-form form-builder">
                    <div className="dialog-form-group">
                        <div className="dialog-form-field eighty">
                            <input type="text" className="input-box" placeholder="E-mail" />
                        </div>
                        <div className="form-options twenty">
                            <div className="button-group">
                                <div className="border-button table-settings button-grey">S</div>
                                <div className="border-button table-settings button-grey">D</div>
                            </div>
                        </div>
                    </div>
                    <div className="dialog-form-group form-textarea">
                        <div className="dialog-form-field eighty">
                            <textarea className="input-box textarea" placeholder="Tell us about your project" />
                        </div>
                        <div className="form-options twenty">
                            <div className="button-group">
                                <div className="border-button table-settings button-grey">S</div>
                                <div className="border-button table-settings button-grey">D</div>
                            </div>
                        </div>

                    </div>
                    <div className="dialog-form-group">
                        <div className="dialog-form-field eighty">
                            <input type="text" className="input-box" placeholder="Basic" />
                        </div>
                    </div>
                    <div className="dialog-form-group">
                        <div className="dialog-form-field eighty">
                            <input type="text" className="input-box" placeholder="Email" />
                        </div>
                    </div>
                    <div className="dialog-form-group">
                        <div className="dialog-form-field eighty">
                            <StarRating name="rating" size={30} totalStars={5} />
                        </div>
                    </div>
                    <div className="dialog-form-group">
                        <div className="dialog-form-field eighty">
                            <Dropzone style={dropStyle} >
                                <div>Try dropping some files here, or click to select files to upload.</div>
                            </Dropzone>
                        </div>
                    </div>
                    <div className="dialog-form-group">
                        <div className="dialog-form-field eighty">
                            <input type="text" className="input-box" placeholder="Insert Number" />
                        </div>
                    </div>
                    <div className="dialog-form-group">
                        <div className="dialog-form-field eighty">
                            <div className="place-label">$</div><input type="text" className="input-box place-input" />
                        </div>
                    </div>
                    <div className="dialog-form-group">
                        <div className="dialog-form-field eighty">
                            <input type="text" className="input-box" placeholder="Pick Date" />
                        </div>
                    </div>
                    <div className="dialog-form-group">
                        <div className="dialog-form-field eighty">
                            <input type="text" className="input-box" placeholder="Pick Time" />
                        </div>
                    </div>
                    <div className="dialog-form-group">
                        <div className="dialog-form-field eighty">
                            <input type="text" className="input-box" placeholder="Pick Time" />
                        </div>
                    </div>
                    <div className="dialog-form-group">
                        <div className="dialog-form-field eighty">
                            <input type="text" className="input-box" placeholder="Pick Time" />
                        </div>
                    </div>
                    <div className="dialog-form-group">
                        <div className="dialog-form-field eighty">
                            <input type="text" className="input-box" placeholder="Pick Time" />
                        </div>
                    </div>
                    <div className="dialog-form-group">
                        <div className="dialog-form-field eighty">
                            <input type="text" className="input-box" placeholder="Pick Time" />
                        </div>
                    </div>
                </div>
                </div>
            </div>

        </div>);
    }
};