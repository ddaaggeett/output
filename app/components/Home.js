// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.css';

export default class Home extends Component {
  render() {

    return (
      <div>
        <div className={styles.container}>
          <h1>Blooprint</h1>
          <br/>
          <Link to="/counter">to Counter (Boiler Example)</Link>
          <br/>
          <br/>
          <Link to="/design">to Design (Blooprint DEV !!)</Link>
        </div>
      </div>
    );
  }
}
