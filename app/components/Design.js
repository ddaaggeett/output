import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import EventListener from 'react-event-listener'
import Help from './Help'
import TitleBlock from './TitleBlock'
import Blips from './Blips'
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
                blips, 
                addBlip,
                keyPressed, 
                design          } = this.props

        var yy = new Date().getFullYear().toString()
        var MM = new Date().getMonth().toString()
        var dd = new Date().getDate().toString()
        var h = new Date().getHours().toString()
        var m = new Date().getMinutes().toString()
        var s = new Date().getSeconds().toString()
        var mm = new Date().getMilliseconds().toString()
        var blipId = yy.concat(MM,dd,h,m,s,mm)

        return (
            <div className={styles.design} onDoubleClick={(e) => { addBlip(blipId,e.clientX,e.clientY) }} >
                <EventListener target={document} onKeyDown={(e) => keyPressed(e.key)} />
                
                <Blips blips={blips} />
                
                { design.helpVisible ? <Help /> : null }
                { design.titleBlockVisible ? <TitleBlock color_set={design.color_set} action_pending={design.action_pending} /> : null }
                { this.state.helpOffered ? <OfferHelp /> : null }
                
            </div>
        )
    }
}

export default Design