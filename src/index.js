import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { Router, Route, hashHistory } from 'react-router'

require('../css/main.css')

ReactDOM.render(
    <Router history={hashHistory}>
    <Route path='/' component={App} />
    </Router>, document.getElementById('root'));
