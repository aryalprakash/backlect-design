import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
        <div className="bg">
          <div className="center-box">
            <div className="center-contents">
              <div className="center-base">
                <div className="padding30">
                  <div className="logo-box logo center-box-logo">B</div>
                  <div className="title1">Welcome to Backlect</div>
                  <div className="para-text">The best Cloud Database to store your data. Works great for team collaboration and mobile app projects with million of users.</div>
                  <div className="title2">Did you know</div>
                  <div className="para-text">It’s built on Google Cloud Infrastructure
                  Can scale to millions of millions inputs
                  Automatically generates REST APIs</div>
                </div>
              </div>
              <div className="center-form">
                <div className="padding30">
                  <div className="title1">Create Your Free Account</div>
                  <form className="signup-form">
                    <div className="form-label">Email</div>
                    <input type="text" placeholder="james@backlect.com" className="input-box input-full" />
                    <div className="form-label">First Name</div>
                    <div className="hundred form-group">
                      <div className="fifty-left">
                        <input type="text" placeholder="Your Name" className="input-box input-half" />
                      </div>
                      <div className="fifty-right">
                        <input type="text" placeholder="Your Surname" className="input-box input-half" />
                      </div>
                    </div>
                    <div className="form-label">Password</div>
                    <div className="hundred form-group">
                      <div className="fifty-left">
                        <input type="password" placeholder="Password" className="input-box input-half" />
                      </div>
                    </div>

                    <button type="submit" className="form-button">Continue</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
