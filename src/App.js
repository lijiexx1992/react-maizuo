
import React, { Component } from 'react';

import { BrowserRouter, HashRouter as Router, Route, Link, NavLink, Redirect, Switch } from 'react-router-dom'


// 引入一级组件
import Home from './views/Home';
import City from './views/City'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/city" component={City}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
