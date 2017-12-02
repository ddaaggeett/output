import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import Restaurant from '../Restaurant'

export default class App extends Component {
  render() {
    return (
        <div className='App'>
            <Route exact path="/" component={Restaurant}/>
        </div>
    );
  }
}
