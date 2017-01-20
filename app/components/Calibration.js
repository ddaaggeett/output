import React, { Component } from 'react'
import { Link } from 'react-router'
import styles from './Calibration.css';
import saveUnitClicks from '../../api/saveUnitClicks'

class Calibration extends Component {

	constructor(props) {
		super(props)
	}

	render(){

		return(
			<div className={styles.calibration} >
                <button className={styles.done} onClick={() => this.handleLeave()} >DONE</button>
                <div className={styles.direction} >
                    <h1>CALIBRATION</h1>
                    <p><strong>ON THE WHITEBOARD</strong>, click just outside<br/>each of the 4 marked corners</p>
                </div>
				<div className={styles.ul} onClick={(e) => this.props.click_UL(e.clientX,e.clientY,window.innerHeight,window.innerWidth)} ></div>
				<div className={styles.ur} onClick={(e) => this.props.click_UR(e.clientX,e.clientY,window.innerHeight,window.innerWidth)} ></div>
				<div className={styles.ll} onClick={(e) => this.props.click_LL(e.clientX,e.clientY,window.innerHeight,window.innerWidth)} ></div>
				<div className={styles.lr} onClick={(e) => this.props.click_LR(e.clientX,e.clientY,window.innerHeight,window.innerWidth)} ></div>
			</div>
		)
	}

	handleLeave() {
		saveUnitClicks(this.props.calibration)
		this.props.leaveCalibration()
	}
}

export default Calibration
