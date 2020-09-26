import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, useHistory
} from "react-router-dom";
import Transactions from './pages/Transactions'
import Home from './pages/Home'
import Profile from './pages/Profile';
import Airtime from './pages/Airtime';
import ConfirmAirtime from './pages/ConfirmAirtime';
import SuccessAirtime from './pages/SuccessAirtime';
import Cable from './pages/Cable';
import ConfirmCable from './pages/ConfirmCable';
import SuccessCable from './pages/SuccessCable';


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
          <Route path="/buy-airtime">
            <Airtime />
          </Route>
          <Route path="/confirm-airtime">
            <ConfirmAirtime />
          </Route>
          <Route path="/success-airtime">
            <SuccessAirtime />
          </Route>
          <Route path="/pay-cable">
            <Cable />
          </Route>
          <Route path="/confirm-cable">
            <ConfirmCable />
          </Route>
        </Switch>
        <Route path="/success-cable">
            <SuccessCable />
          </Route>
      </div>
    </Router>
    );
  }
}

export default App;
