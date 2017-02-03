import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import EventListener from 'react-event-listener'
import Help from './Help'
import TitleBlock from './TitleBlock'
import Blips from './Blips'
import Calibration from './Calibration'
import OfferHelp from './OfferHelp'
import OpenFileWindow from './OpenFileWindow'
import styles from './Design.css'

class Design extends Component {

    constructor(props){
        super(props)

        this.state = {
            helpOffered: true,
            pending: ''
        }
    }

    componentDidMount(){

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

        const { blips, addBlip, keyPressed, calibration, design } = this.props

        var yy = new Date().getFullYear().toString()
        var MM = new Date().getMonth().toString()
        var dd = new Date().getDate().toString()
        var h = new Date().getHours().toString()
        var m = new Date().getMinutes().toString()
        var s = new Date().getSeconds().toString()
        var mm = new Date().getMilliseconds().toString()
        var stampTime = yy.concat(MM,dd,h,m,s,mm)

        /*
        TODO:
        image will need to be the compiled output image from the blooprint-api
        */
        // var imagePath = null
        var imagePath = design.imagePath
        var backimage = {
            backgroundImage: 'url(' + imagePath + ')',
            backgroundSize: '100% 100%'
        }

        return (

            /*
            trying to re-render on image load
            */

            <div className={styles.design} onDoubleClick={(e) => { addBlip(stampTime,e.clientX,e.clientY) }} >
                <img className={styles.design} src={imagePath} />


                <EventListener target={document} onKeyDown={(e) => this.handleKey(e,stampTime)} />
                { design.blipsVisible ? <Blips blips={blips} /> : null }
                { design.titleBlockVisible ? <TitleBlock color_set={design.color_set} action_pending={design.action_pending} {...this.props} /> : null }
                { this.state.helpOffered ? <OfferHelp /> : null }
                { design.isCalibrating ? <Calibration {...this.props} /> : null }

                { this.props.fileStructure.fileWindowVisible ? <OpenFileWindow {...this.props} /> : null }

                { design.helpVisible ? <Help /> : null }
            </div>
        )
    }

    handleKey(e,stampTime) {

        const newPending = this.state.pending.concat(e.key).toLowerCase()
        this.setState({
            pending: newPending
        })

        //  marker color handling
        if(this.state.pending.includes('escape')) {
            this.props.closeFileWindow()
            this.setState({pending: ''})
        }
        else if(this.state.pending.includes('red')) {
            this.props.setMarkerColor('red')
            this.setState({pending: ''})
        }
        else if(this.state.pending.includes('blue')) {
            this.props.setMarkerColor('blue')
            this.setState({pending: ''})
        }
        else if(this.state.pending.includes('green')) {
            this.props.setMarkerColor('green')
            this.setState({pending: ''})
        }
        else if(this.state.pending.includes('orange')) {
            this.props.setMarkerColor('orange')
            this.setState({pending: ''})
        }
        else if(this.state.pending.includes('purple')) {
            this.props.setMarkerColor('purple')
            this.setState({pending: ''})
        }
        else if(this.state.pending.includes('black')) {
            this.props.setMarkerColor('black')
            this.setState({pending: ''})
        }
        else if(this.state.pending.includes('gray')) {
            this.props.setMarkerColor('gray')
            this.setState({pending: ''})
        }
        else if(this.state.pending.includes('brown')) {
            this.props.setMarkerColor('brown')
            this.setState({pending: ''})
        }
        //  bloop action handling
        else if(this.state.pending.includes('1')) {
            this.props.setBloopAction('write')
            this.setState({pending: ''})
        }
        else if(this.state.pending.includes('2')) {
            this.props.setBloopAction('erase')
            this.setState({pending: ''})
        }
        else if(this.state.pending.includes('3')) {
            this.props.setBloopAction('calibrate')
            this.setState({pending: ''})
        }

        //  TODO:
        //  simplify reducer by putting logic here
        this.props.keyPressed(e.key, stampTime)
    }
}

export default Design
