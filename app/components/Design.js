/*
NOTE:
see old_design.js for UI preferences - main UI will be keyboard control. buttons used for dev purposes
*/
import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
// import styles from './Design.css'
import EventListener from 'react-event-listener'

class Design extends Component {

    constructor(props){
        super(props)
    }

    render() {

        const { 
                keyPressed, 
                changeColor, 
                addBlip, 
                design 
                            } = this.props

        return (
            <div>
                <EventListener target={document} onKeyDown={() => keyPressed(event.key)} />
                Design Page
                <br/>
                <Link to='/'>go HOME</Link>
                <br/>
                <br/>
                
                <h1>marker color = { design.color_set } </h1>
                <h3>color pending = { design.color_pending } </h3>
                <br/>
                <br/>
                user remark: select marker color by typing it in

            </div>
        )
    }

    handleKeyDown = (e) => {
        
        console.log('before = ',design.color_pending)
        {() => keyPressed(e.key).bind(this)}
        console.log('after  = ',design.color_pending)

        // this.checkHelp(e)
        // this.checkColor()
    }


    //  color_set logic
    checkColor = () => {

        // console.log('!!!color_pending = ', this.design.color_pending)

        // var col = { design.color_pending }.toLowerCase()
        // console.log('!!!color_pending = ',col)
        // if (col.includes('red')) {
        //     // {() => changeColor('red')}
        //     this.setState({
        //         color_pending: '',
        //         color_set: 'red'
        //     })
        // }
        // else if (col.includes('blue')) {
        //     this.setState({
        //         color_pending: '',
        //         color_set: 'blue'
        //     })
        // }
        // else if (col.includes('green')) {
        //     this.setState({
        //         color_pending: '',
        //         color_set: 'green'
        //     })
        // }
        // else if (col.includes('orange')) {
        //     this.setState({
        //         color_pending: '',
        //         color_set: 'orange'
        //     })
        // }
        // else if (col.includes('gray')) {
        //     this.setState({
        //         color_pending: '',
        //         color_set: 'gray'
        //     })
        // }
        // else if (col.includes('black')) {
        //     this.setState({
        //         color_pending: '',
        //         color_set: 'black'
        //     })
        // }
    }

    // //  help component toggle logic
    // checkHelp = (e) => {
    //     if ((e.key === 'h') || (e.key === 'H')) {
    //         if(!this.state.helpVisible){
    //             this.setState({
    //                 helpVisible: true
    //             })
    //         }
    //         else{
    //             this.setState({
    //                 helpVisible: false
    //             })
    //         }
    //     }
    // }

}

export default Design