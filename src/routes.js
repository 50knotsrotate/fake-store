import React from 'react';
import AuthRouter from './components/AuthRouter/AuthRouter';
import Home from './components/Home/Home';
import App from './App'
import { Switch, Route } from 'react-router-dom';

export default (
    <Switch>
        <Route exact path='/' component={App}></Route>
        <Route  path='/home' component={Home}></Route>
    </Switch>
);