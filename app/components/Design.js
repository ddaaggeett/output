/*
NOTE:
see old_design.js for UI preferences - main UI will be keyboard control. buttons used for dev purposes
*/
import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import styles from './Counter.css'

class Design extends Component {

  render() {

    const { changeColor, addBlip, design } = this.props

    return (
      <div>
        Design Page
        <br/>
        <Link to='/'>go HOME</Link>
        <br/>
        <br/>
        <button onClick={() => changeColor('red')}>red</button>
        <br/>
        <button onClick={() => changeColor('green')}>green</button>
        <br/>
        <button onClick={() => changeColor('blue')}>blue</button>
        <br/>
        <br/>
        <h1>marker color = { design.color_set } </h1>

      </div>
    )
  }
}

export default Design