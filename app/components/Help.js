import React, {Component} from 'react'
import styles from './Help.css'

class Help extends Component {

	constructor(props){
        super(props)
    }

    render() {
		return (
			<div className={styles.help}>
				<h2 className={styles.comp}>Design Help</h2>
				<h4>select marker color by typing:</h4>
				<p><span className={styles.red}>red</span>{' '}
				<span className={styles.green}>green</span>{' '}
				<span className={styles.blue}>blue</span>{' '}
				<span className={styles.orange}>orange</span>{' '}
				<span className={styles.gray}>gray</span>{' '}
				<span className={styles.brown}>brown</span>{' '}
				<span className={styles.black}>black</span></p>
				<h4>toggle title block:  ></h4>
			</div>
		)
	}
}

export default Help