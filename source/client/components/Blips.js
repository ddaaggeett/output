import React, { Component } from 'react'
import BlipButton from './BlipButton';


class Blips extends Component {

	constructor(props) {
		super(props)
	}

	render(){

		const { blips } = this.props

		return(
			<div>
				{ blips.map((blip, i) => <BlipButton key={i} i={i} blip={blip} {...this.props} />) }
			</div>
		)
	}
}

export default Blips