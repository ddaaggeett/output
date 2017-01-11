import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import EventListener from 'react-event-listener'
import Help from './Help'
import TitleBlock from './TitleBlock'
import Blip from './Blip'
import OfferHelp from './OfferHelp'
import styles from './Design.css'

class Design extends Component {


    constructor(props){
        super(props)

        this.state = {
            helpOffered: true
        }
    }

    componentDidMount(){

        this.setState({
            helpOffered: true
        })
        setTimeout(
            () => {
                this.setState({
                    helpOffered: false
                })
            },
            1000
        )
    }

    render() {

        const { 
                keyPressed, 
                addBlip, 
                design          } = this.props

        return (
            <div className={styles.design} onDoubleClick={(e) => { addBlip(e.clientX,e.clientY) }} >
                <EventListener target={document} onKeyDown={(e) => keyPressed(e.key)} />
                { design.helpVisible ? <Help /> : null }
                { design.titleBlockVisible ? <TitleBlock color_set={design.color_set} action_pending={design.action_pending} /> : null }
                { design.blipVisible ? <Blip id={design.blipID} /> : null }
                { this.state.helpOffered ? <OfferHelp /> : null }
            </div>
        )
    }
}

export default Design