import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Welcome from './components/Welcome'
import Login from './components/Login'
import ForgotPassword from './components/ForgotPassword'
import ConfirmDelete from './components/ConfirmDelete'
import Table from './components/Table'

import { Router, Route, hashHistory } from 'react-router'
import NewAction from "./components/NewAction";
import RoleAdd from "./components/RoleAdd";
import FieldSettings from "./components/FieldSettings";

require('../css/main.css');
require('../css/dialog.css');

ReactDOM.render(
    <Router history={hashHistory}>
    <Route path='/' component={App} />
    <Route path='/welcome' component={Welcome} />
    <Route path='/login' component={Login} />
    <Route path='/forgotpassword' component={ForgotPassword} />
    <Route path='/newaction' component={NewAction} />
    <Route path='/confirmdelete' component={ConfirmDelete} />
    <Route path='/roleadd' component={RoleAdd} />
    <Route path='/table' component={Table} />
    <Route path='/fieldsettings' component={FieldSettings} />
    </Router>,

    document.getElementById('root'));
