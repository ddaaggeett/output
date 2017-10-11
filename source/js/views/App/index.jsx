import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import Menu from 'components/Global/Menu';

import Home from '../Home'
import Projects from '../Projects'

export default class App extends Component {
  render() {
    return (
        <div className='App'>
            <Route exact path="/" component={Home}/>
            <Route path="/projects" component={Projects}/>
        </div>
    );
  }
}
