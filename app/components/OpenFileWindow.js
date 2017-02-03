import React, {Component} from 'react'
import styles from './OpenFileWindow.css'

import NewTitle from './NewTitle'

class OpenFileWindow extends Component {

	constructor(props){
        super(props)

		this.state = {
			newTitle: '',
			addingNew: false
		}
    }

	render() {

		return(
			<div className={styles.main}>

				<div className={styles.files} >

				</div>

				<div className={styles.header} >
					<button className={styles.add} onClick={() => this.clickAdd()} >+ blooprint</button>
					{ this.state.addingNew ? <NewTitle {...this.props} /> : null }
				</div>

				<div className={styles.footer} >
					<div className={styles.dir} >branch from any image</div>
                	<div className={styles.esc} >press ESC to exit</div>
				</div>

			</div>
		)
	}

	clickAdd() {
		this.setState({
			addingNew: true
		})
	}
}

export default OpenFileWindow
