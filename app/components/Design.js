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
                
                <p className={styles.offerHelp}>toggle HELP:  ?</p>
                <br/>
                <br/>
                { design.helpVisible ? <Help /> : null }
                { design.titleBlockVisible ? <TitleBlock color_set={design.color_set} action_pending={design.action_pending} /> : null }



            </div>
        )
    }
}

export default Design