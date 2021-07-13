import './App.css';
import Home from './components/Home';
import React, { Component } from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Users from './components/Users';

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/user/:user" component={ Users } />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}
