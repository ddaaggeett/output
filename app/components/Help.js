import React, {Component} from 'react'
import styles from './Help.css'

class Help extends Component {

	constructor(props){
        super(props)
    }

    render() {
		return (
			<div className={styles.help}>
				Help Component
			</div>
		)
	}
}

export default Help