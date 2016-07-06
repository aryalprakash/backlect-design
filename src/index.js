import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Welcome from './components/Welcome'

import { Router, Route, hashHistory } from 'react-router'

require('../css/main.css');

ReactDOM.render(
    <Router history={hashHistory}>
    <Route path='/' component={App} />
    <Route path='/welcome' component={Welcome} />
    </Router>,

    document.getElementById('root'));
