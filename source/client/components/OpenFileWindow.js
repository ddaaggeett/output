import React, {Component} from 'react'
import styles from './OpenFileWindow.css'
import FileList from './FileList'
import NewTitle from './NewTitle'

class OpenFileWindow extends Component {

	constructor(props){
        super(props)

		this.state = {
			newTitle: '',
			addingNew: false,
			addButton: '+ blooprint'
		}
    }

	render() {

		return(
			<div className={styles.main}>

				<FileList {...this.props} />

				<div className={styles.header} >
					<button className={styles.add} onClick={() => this.clickAddButton()} >{this.state.addButton}</button>
					{ this.state.addingNew ? <NewTitle {...this.props} /> : null }
					{ this.state.addingNew ? null : <div className={styles.how}>select (dbl-click) a blooprint, or </div> }
				</div>

				<div className={styles.footer} >
					<div className={styles.what} >branch from any image</div>
                	<div className={styles.esc} >press ESC to exit</div>
				</div>

			</div>
		)
	}

	clickAddButton() {
		if(this.state.addButton !== 'x') {
			this.setState({
				addingNew: true,
				addButton: 'x'
			})
		}
		else {
			this.setState({
				addingNew: false,
				addButton: '+ blooprint'
			})
		}
	}
}

export default OpenFileWindow
