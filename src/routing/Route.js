import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import Cart from '../components/Cart';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/add-cart" component={Home} />
      <Route path="/cart" component={Cart} />
    </Switch>
  );
}