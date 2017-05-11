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
        var mm = new Date().getMonth().toString()
        var dd = new Date().getDate().toString()
        var h = new Date().getHours().toString()
        var m = new Date().getMinutes().toString()
        var s = new Date().getSeconds().toString()
        var mmm = new Date().getMilliseconds().toString()
        var stampTime = yy.concat(mm,dd,h,m,s,mmm)

        /*
        dynamic module (image) loading
        https://webpack.github.io/docs/context.html#context-module-api
        */
        var req = require.context('../../../whiteSocket/output', false, /^.*\.bmp$/)

        return (

            <div className={styles.design} >
                <EventListener target={document} onKeyDown={(e) => this.handleKey(e,stampTime)} />
                <img className={styles.design} src={req('./'+design.image+'.bmp')} onDoubleClick={(e) => { addBlip(stampTime,e.clientX,e.clientY) }} />
                { design.blipsVisible ? <Blips blips={blips} /> : null }
                { design.titleBlockVisible ? <TitleBlock color_set={design.color_set} bloopAction={design.bloopAction} {...this.props} /> : null }
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
            if(this.props.design.helpVisible) this.props.closeHelp()
            this.setState({pending: ''})
        }
        else if(this.state.pending.includes('red')) {
            this.props.setMarkerColor('#FF0000')
            this.setState({pending: ''})
        }
        else if(this.state.pending.includes('blue')) {
            this.props.setMarkerColor('#0000FF')
            this.setState({pending: ''})
        }
        else if(this.state.pending.includes('green')) {
            this.props.setMarkerColor('#008000')
            this.setState({pending: ''})
        }
        else if(this.state.pending.includes('orange')) {
            this.props.setMarkerColor('#FFA500')
            this.setState({pending: ''})
        }
        else if(this.state.pending.includes('purple')) {
            this.props.setMarkerColor('#800080')
            this.setState({pending: ''})
        }
        else if(this.state.pending.includes('black')) {
            this.props.setMarkerColor('#000000')
            this.setState({pending: ''})
        }
        else if(this.state.pending.includes('gray')) {
            this.props.setMarkerColor('#808080')
            this.setState({pending: ''})
        }
        else if(this.state.pending.includes('brown')) {
            this.props.setMarkerColor('#A52A2A')
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
        //  handle toggle help
        else if(this.state.pending.includes('shift?')) {
            this.props.toggleHelp()
            this.setState({pending: ''})
        }
        //  handle tiggle title block
        else if(this.state.pending.includes('shift>')) {
            this.props.toggleTitleBlock()
            this.setState({pending: ''})
        }
        //  handle write/erase/calibrate trigger
        else if(this.state.pending.includes('control ')) {
            // this.props.triggerBloop(this.props.design.bloopAction,stampTime)
            this.props.prepForInputImage()
            this.setState({pending: ''})
        }
    }
}

export default Design
