// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.css';

export default class Home extends Component {
    render() {

        return (
            <div className={styles.home}>
                <img className={styles.logo} src='../resources/trademark_master.JPG' />
                <Link className={styles.linkDesign} to="/design"><button>GO DESIGN</button></Link>
                <p className={styles.slogan} >Welcome to our development process!</p>
            </div>
        );
    }
}
