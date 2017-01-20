import React, {Component} from 'react'
import styles from './Help.css'

class Help extends Component {

	constructor(props){
        super(props)
    }

    render() {
		return (
			<div className={styles.help}>
				<h1 className={styles.comp}>Design Help</h1>
				<h4>toggle TITLE BLOCK by PRESSING:  <span className={styles.key} >></span></h4>
				<h4>add BLIP by DOUBLE CLICKING anywhere</h4>
				<h4>select MARKER color by TYPING:</h4>
				<p><span className={styles.red}>red</span>{' '}
				<span className={styles.green}>green</span>{' '}
				<span className={styles.blue}>blue</span>{' '}
				<span className={styles.orange}>orange</span>{' '}
				<span className={styles.gray}>gray</span>{' '}
				<span className={styles.brown}>brown</span>{' '}
				<span className={styles.black}>black</span></p>
				<h4>set pending ACTION by PRESSING:</h4>
				<p><span className={styles.key}>1</span>-WRITE <span className={styles.key}>2</span>-ERASE <span className={styles.key}>3</span>-CALIBRATE</p>
				<h4>trigger <img className={styles.logo} src='http://www.blooprint.xyz/images/trademark_master.JPG' /> action: <span className={styles.key}>CTRL-SPACE</span></h4>
			</div>
		)
	}
}

export default Help
