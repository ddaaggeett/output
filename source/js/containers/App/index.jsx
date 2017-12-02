import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import Blooprint from '../Blooprint'
import Restaurant from '../Restaurant'

export default class App extends Component {
  render() {
    return (
        <div className='App'>
            <Route exact path="/" component={Blooprint}/>
            <Route path="/restaurant" component={Restaurant}/>
        </div>
    );
  }
}
