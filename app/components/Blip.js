import React, {Component} from 'react'
import styles from './Blip.css'
// import BlipEditWindow from './BlipEditWindow'

class Blip extends Component {

	constructor(props){
        super(props)
    }

    render() {

		return (
			<button className={styles.blip} />
		)
	}
}

export default Blip