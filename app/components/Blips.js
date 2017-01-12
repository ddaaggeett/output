import React, { Component } from 'react'
import Blip from './Blip';


class Blips extends Component {

	constructor(props) {
		super(props)
	}

	render(){

		const { blips } = this.props

		return(

			<div>
				{ blips.map((blip, i) => <Blip key={i} x={blips[i].x} y={blips[i].y} />) }
			</div>
		)
	}

}

export default Blips