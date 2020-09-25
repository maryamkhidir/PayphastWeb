import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Transactions from './pages/Transactions'
import Home from './pages/Home'
import Profile from './pages/Profile';


class App extends Component {
  render() {
    return (
      
      <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/transactions">
            <Transactions />
          </Route>
          <Route path="/settings">
            <Profile />
          </Route>
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
