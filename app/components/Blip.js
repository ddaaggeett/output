import React, {Component} from 'react'
import styles from './Blip.css'
// import BlipEditWindow from './BlipEditWindow'

class Blip extends Component {

	constructor(props){
        super(props)
    }

    handleClick(e) {
	    e.preventDefault();
	    console.log('blip clicked')
	    // const { postId } = this.props.params;
	    // const author = this.refs.author.value;
	    // const comment = this.refs.comment.value;
	    // this.props.addComment(postId, author, comment);
	    // this.refs.commentForm.reset();
	}
	  

    render() {

    	const { x, y } = this.props

    	var blipLocation = {
            left: x-13,
            top: y-13
        }

		return (
			<button className={styles.blip} style={blipLocation} onClick={this.handleClick} />
		)
	}
}

export default Blip