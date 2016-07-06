import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Welcome from './components/Welcome'
import Login from './components/Login'
import ForgotPassword from './components/ForgotPassword'

import { Router, Route, hashHistory } from 'react-router'

require('../css/main.css');
require('../css/dialog.css');


ReactDOM.render(
    <Router history={hashHistory}>
    <Route path='/' component={App} />
    <Route path='/welcome' component={Welcome} />
    <Route path='/login' component={Login} />
    <Route path='/forgotpassword' component={ForgotPassword} />
    </Router>,

    document.getElementById('root'));
