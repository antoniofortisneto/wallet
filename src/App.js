import React from 'react';
import { Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

export default class App extends React.Component {
  render() {
    return (
      <p>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route path="/carteira" component={ Wallet } />
        </Switch>
      </p>
    );
  }
}
