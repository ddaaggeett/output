import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import EventListener from 'react-event-listener'
import Help from './Help'
import TitleBlock from './TitleBlock'
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
                <p className={styles.offerHelp}>toggle HELP:  ?</p>
                <br/>
                <br/>
                { design.helpVisible ? <Help /> : null }
                { design.titleBlockVisible ? <TitleBlock /> : null }



            </div>
        )
    }
}

export default Design