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


export default class NewDialog extends Component{

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
            <div className="dialog-main-content">
                <div className="dialog-content-head light-blue">
                    <div className="dialog-content-title">Add Workout</div>
                    <div className="border-button table-new">Save Workout</div>
                </div>
                <div className="dialog-form">
                    <div className="dialog-form-group">
                        <div className="dialog-form-label">Input field</div>
                        <div className="dialog-form-field">
                            <input type="text" className="input-box" placeholder="E-mail" />
                        </div>
                    </div>
                    <div className="dialog-form-group">
                        <div className="dialog-form-label">Textarea</div>
                        <div className="dialog-form-field">
                            <textarea className="input-box textarea" placeholder="Tell us about your project" />
                        </div>
                    </div>
                    <div className="dialog-form-group">
                        <div className="dialog-form-label">Selection</div>
                        <div className="dialog-form-field">
                            <input type="text" className="input-box" placeholder="Basic" />
                        </div>
                    </div>
                    <div className="dialog-form-group">
                        <div className="dialog-form-label">Validation</div>
                        <div className="dialog-form-field">
                            <input type="text" className="input-box" placeholder="Email" />
                        </div>
                    </div>
                    <div className="dialog-form-group">
                        <div className="dialog-form-label">Rating</div>
                        <div className="dialog-form-field">
                            <StarRating name="rating" size={30} totalStars={5} />
                        </div>
                    </div>
                    <div className="dialog-form-group">
                        <div className="dialog-form-label">Photo</div>
                        <div className="dialog-form-field">
                            <Dropzone style={dropStyle} >
                                <div>Try dropping some files here, or click to select files to upload.</div>
                            </Dropzone>
                        </div>
                    </div>
                    <div className="dialog-form-group">
                        <div className="dialog-form-label">Number</div>
                        <div className="dialog-form-field">
                            <input type="text" className="input-box" placeholder="Insert Number" />
                        </div>
                    </div>
                    <div className="dialog-form-group">
                        <div className="dialog-form-label">Currency</div>
                        <div className="dialog-form-field">
                            <input type="text" className="input-box" placeholder="$" />
                        </div>
                    </div>
                    <div className="dialog-form-group">
                        <div className="dialog-form-label">Date</div>
                        <div className="dialog-form-field">
                            <input type="text" className="input-box" placeholder="Pick Date" />
                        </div>
                    </div>
                    <div className="dialog-form-group">
                        <div className="dialog-form-label">Time</div>
                        <div className="dialog-form-field">
                            <input type="text" className="input-box" placeholder="Pick Time" />
                        </div>
                    </div>
                    <div className="dialog-form-group">
                        <div className="dialog-form-label">Selection(state)</div>
                        <div className="dialog-form-field">
                            <input type="text" className="input-box" placeholder="Pick Time" />
                        </div>
                    </div>
                    <div className="dialog-form-group">
                        <div className="dialog-form-label">Reference</div>
                        <div className="dialog-form-field">
                            <input type="text" className="input-box" placeholder="Pick Time" />
                        </div>
                    </div>
                    <div className="dialog-form-group">
                        <div className="dialog-form-label">Location</div>
                        <div className="dialog-form-field">
                            <input type="text" className="input-box" placeholder="Pick Time" />
                        </div>
                    </div>
                    <div className="dialog-form-group">
                        <div className="dialog-form-label">URL</div>
                        <div className="dialog-form-field">
                            <input type="text" className="input-box" placeholder="Pick Time" />
                        </div>
                    </div>
                    <div className="dialog-form-group">
                        <div className="dialog-form-label">Tags</div>
                        <div className="dialog-form-field">
                            <input type="text" className="input-box" placeholder="Pick Time" />
                        </div>
                    </div>
                    <div className="dialog-form-group">
                        <div className="dialog-form-label">Video</div>
                        <div className="dialog-form-field">
                            <input type="text" className="input-box" placeholder="Pick Time" />
                        </div>
                    </div>
                    <div className="dialog-form-group">
                        <div className="dialog-form-label">Progress</div>
                        <div className="dialog-form-field">
                            <input type="text" className="input-box" placeholder="Pick Time" />
                        </div>
                    </div>
                </div>
            </div>

        </div>);
    }
};