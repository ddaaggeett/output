import React, {Component} from 'react'
import styles from './FileList.css'

import NewTitle from './NewTitle'

class File extends Component {

	render() {

		return(
			<div className={styles.single} onDoubleClick={() => this.clickFile()} >{this.props.title}</div>
		)
	}

    clickFile() {
		this.props.selectBlooprint(this.props.fileStructure,this.props.title)
    }
}

export default File
