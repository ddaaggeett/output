import React, {Component} from 'react'
import styles from './OpenFileWindow.css'

class NewTitle extends Component {

	componentDidMount() {
		this.nameInput.focus()
	}

	render() {
		return(
                <textarea className={styles.newTitle} ref={(input) => { this.nameInput = input }} placeholder={'ENTER new Blooprint title'} onKeyDown={(e) => this.handleKey(e, e.target.value)} />
		)
	}

    handleKey(e, txt) {
        if(e.key.toLowerCase() === 'enter') {
			e.preventDefault()
            this.props.createBlooprint(this.props.fileStructure,txt)
			this.props.closeFileWindow()
        }
    }
}

export default NewTitle
