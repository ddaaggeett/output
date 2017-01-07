/*
NOTE:
see old_design.js for UI preferences - main UI will be keyboard control. buttons used for dev purposes
*/
import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import EventListener from 'react-event-listener'
import Help from './Help'
import styles from './Design.css'

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
            <div className={styles.design} >
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
                select marker color by typing it in
                <br/>
                <br/>
                toggle HELP = CTRL+H

                <br/>
                <br/>
                { design.helpVisible ? <Help /> : null }



            </div>
        )
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