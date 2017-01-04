// @flow
import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import styles from './Counter.css'

class Design extends Component {


  constructor(props){
    super(props)
  }

  props: {
    changeColor: () => void,
    addBlip: () => void,
    color_set: color
  }

  render() {

    const { changeColor, addBlip, color_set } = this.props

  //   console.log('COMPONENT\nprops = ',this.props)

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
        //TODO: props undefined
        <h1>marker color = { color_set } </h1>

      </div>
    )
  }
}

export default Design