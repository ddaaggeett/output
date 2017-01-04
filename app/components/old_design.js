import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'
import EventListener from 'react-event-listener'
import Help from './Help'
// import TitleBlock from '../components/TitleBlock'

import styles from'../static/styles.css'
import { changeColor } from '../actions'


class Design extends React.Component{

	constructor(props) {
	    super(props);

	    this.state = {
	    	color_pending: '',
	    	color_set: 'black',
			helpVisible: false
	    }
	}

	componentDidMount() {
		console.log('CSS: styles.some = ' + styles.some)
	}
	
	render(){
		console.log('STATE = ', this.state)
		console.log('STORE = ', store)

		return(
			<div>
				<EventListener target={global.document} onKeyDown={this.handleKeyDown.bind(this)} />
				<h1 className={styles.some} >DESIGN PAGE</h1>
				<Link to='/'>
					<button>back to HOME</button>
				</Link>
				<h1>marker color = {this.state.color_set}</h1>
				{ this.state.helpVisible ? <Help /> : null }
			</div>
		)
	}

	handleKeyDown = (e) => {
		this.setState({
			color_pending: this.state.color_pending + e.key
		})
		console.log('color_pending = ', this.state.color_pending)

		this.checkHelp(e)
		this.checkColor()
	}

	//	help component toggle logic
	checkHelp = (e) => {
		if ((e.key === 'h') || (e.key === 'H')) {
			if(!this.state.helpVisible){
				this.setState({
					helpVisible: true
				})
			}
			else{
				this.setState({
					helpVisible: false
				})
			}
		}
	}

	//	color_set logic
	checkColor = () => {
		var col = this.state.color_pending.toLowerCase()
		if (col.includes('red')) {
			// {() => changeColor('red')}
			this.setState({
				color_pending: '',
				color_set: 'red'
			})
		}
		else if (col.includes('blue')) {
			this.setState({
				color_pending: '',
				color_set: 'blue'
			})
		}
		else if (col.includes('green')) {
			this.setState({
				color_pending: '',
				color_set: 'green'
			})
		}
		else if (col.includes('orange')) {
			this.setState({
				color_pending: '',
				color_set: 'orange'
			})
		}
		else if (col.includes('gray')) {
			this.setState({
				color_pending: '',
				color_set: 'gray'
			})
		}
		else if (col.includes('black')) {
			this.setState({
				color_pending: '',
				color_set: 'black'
			})
		}
	}


}

module.exports = Design

