import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import App from './components/App';
import Home from './components/Home';
import Design from './components/Design'
import Blip from './components/Blip'

// Route configuration
export default (
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/design" component={Design} />
  </Router>
);
