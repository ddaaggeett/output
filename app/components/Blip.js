import React, {Component} from 'react'
import { Link } from 'react-router'
import EventListener from 'react-event-listener'
import styles from './Blip.css'


class Blip extends Component {

	render() {

		const { params, editBlip, blips } = this.props

		var index = 0
		for(var i = 0; i < blips.length; i++) {
	        if(blips[i].blipID === params.blipID) {
	        	index = i
	        }
	    }
		
		return(
			<div className={styles.blip}>
                BLIP ID: { params.blipID }
				<Link to={'/design'}><button className={styles.escbutton}>esc</button></Link>
				<textarea className={styles.text} value={blips[index].text} onChange={(e) => editBlip(params.blipID, e.target.value)} />
			</div>
		)
	}

}

export default Blip