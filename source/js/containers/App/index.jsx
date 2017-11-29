import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import Home from '../Home'
import Projects from '../Projects'
import Contact from '../Contact'
import Music from '../Music'
import RestaurantPage from '../RestaurantPage'

export default class App extends Component {
  render() {
    return (
        <div className='App'>
            <Route exact path="/" component={Home}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/music" component={Music}/>
            <Route path="/ncfr" component={RestaurantPage}/>
        </div>
    );
  }
}
