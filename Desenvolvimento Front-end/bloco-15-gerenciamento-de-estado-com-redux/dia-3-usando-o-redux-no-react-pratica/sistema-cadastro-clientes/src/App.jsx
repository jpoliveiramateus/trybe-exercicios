import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import RegisteredCustomers from './pages/RegisteredCustomers';
import NotFound from './pages/NotFound';
import Registration from './pages/Registration';

function App() {
  return (
    <Switch>
      <Route path="/registration" component={Registration} />
      <Route path="/registered" component={RegisteredCustomers} />
      <Route path="/login" component={Login} />
      <Route exact path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
