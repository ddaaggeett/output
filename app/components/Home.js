// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.css';

export default class Home extends Component {
    render() {

        var logoStyle = {

        }

        return (
            <div>
                <div className={styles.container}>
                <img className={styles.logo} src='../resources/trademark_master.JPG' />
                <br/>
                <Link className={styles.linkDesign} to="/design"><button>GO DESIGN</button></Link>
                </div>
            </div>
        );
    }
}
