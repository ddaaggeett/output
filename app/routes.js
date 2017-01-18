// @flow
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import DesignPage from './containers/DesignPage';
import BlipPage from './containers/BlipPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/design" component={DesignPage} />
    <Route path="/blip/:blipID" component={BlipPage} />
  </Route>
);
