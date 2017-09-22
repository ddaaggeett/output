import React, { Component } from 'react';
import Routes from 'config/routes';

import Menu from 'components/Global/Menu';

import Home from '../Home'

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <Home />
      </div>
    );
  }
}
