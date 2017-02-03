import React, {Component} from 'react'
import styles from './NewTitle.css'

class NewTitle extends Component {

	componentDidMount() {
		this.nameInput.focus()
	}

	render() {

		return(
                <textarea className={styles.main} ref={(input) => { this.nameInput = input }} placeholder={'ENTER new Blooprint title'} onKeyDown={(e) => this.handleKey(e, e.target.value)} />

		)
	}

    handleKey(e, txt) {
        if(e.key.toLowerCase() === 'enter') {
			/*
			TODO:
			handle creating a new directory ~/api/blooprint/txt
			*/
			e.preventDefault()
            this.props.createBlooprint(this.props,txt)


            this.props.closeFileWindow()
        }
    }
}

export default NewTitle
