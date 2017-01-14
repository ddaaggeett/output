import React, {Component} from 'react'
import { Link } from 'react-router'
import styles from './BlipButton.css'

class BlipButton extends Component {

	constructor(props){
        super(props)
    }

    render() {

    	const { blip } = this.props

    	var blipLocation = {
            left: ((blip.x)-13),
            top: ((blip.y)-13)
        }

		return (
			<Link to={`/blip/${blip.blipID}`}>
				<button className={styles.blip} style={blipLocation} />
            </Link>
		)
	}
}

export default BlipButton