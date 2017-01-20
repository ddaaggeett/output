import React, {Component} from 'react'
import { Link } from 'react-router'
import EventListener from 'react-event-listener'
import styles from './Blip.css'

class Blip extends Component {

	constructor(props) {
		super(props)
	}

	componentDidMount() {
		this.nameInput.focus()
	}

	render() {

		const { params, deleteBlip, editBlip, blips } = this.props

		console.log('indide blip props = \n',this.props)

		var index = 0
		for(var i = 0; i < blips.length; i++) {
	        if(blips[i].blipID === params.blipID) {
	        	index = i
	        }
	    }

		return(
			<div className={styles.main}>
				<div className={styles.header}>
	                <div className={styles.id} >BLIP ID: { params.blipID }</div>
					<Link to={'/design'}><button className={styles.escbutton}>esc</button></Link>
					<Link to={'/design'}><button className={styles.delbutton} onClick={() => this.handleDelete(index)} >del</button></Link>
				</div>
				<textarea className={styles.text} ref={(input) => { this.nameInput = input }} value={blips[index].text} onChange={(e) => editBlip(params.blipID, e.target.value)} />
			</div>
		)
	}

	handleDelete(index) {
		//	TODO:
		// 	setup user confirmation component to delete blip
		this.props.deleteBlip(index)
	}
}

export default Blip
