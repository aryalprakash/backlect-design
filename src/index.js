import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Welcome from './components/Welcome'
import Login from './components/Login'
import ForgotPassword from './components/ForgotPassword'
import ConfirmDelete from './components/ConfirmDelete'
import ListElements from './components/ListElements'
import Table from './components/Table'
import ListView from './components/ListView'
import ListSelection from './components/ListSelection'
import Users from './components/Users'
import Roles from './components/Roles'
import Permissions from './components/Permissions'

import { Router, Route, hashHistory } from 'react-router'
import NewAction from "./components/NewAction";
import RoleAdd from "./components/RoleAdd";
import FieldSettings from "./components/FieldSettings";
import NewDialog from "./components/NewDialog";
import FormBuilder from "./components/FormBuilder";
import TableAdd from "./components/TableAdd";
import PermissionsEdit from "./components/PermissionsEdit";
import AddUser from "./components/AddUser";
import Profile from "./components/Profile";

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
    <Route path='/list-elements' component={ListElements} />
    <Route path='/list-view' component={ListView} />
    <Route path='/list-selection' component={ListSelection} />
    <Route path='/users' component={Users} />
    <Route path='/roles' component={Roles} />
    <Route path='/permissions' component={Permissions} />
    <Route path='/fieldsettings' component={FieldSettings} />
    <Route path='/new-dialog' component={NewDialog} />
    <Route path='/form-builder' component={FormBuilder} />
    <Route path='/table-add' component={TableAdd} />
    <Route path='/edit-permissions' component={PermissionsEdit} />
    <Route path='/user-add' component={AddUser} />
    <Route path='/profile' component={Profile} />
    </Router>,

    document.getElementById('root'));
