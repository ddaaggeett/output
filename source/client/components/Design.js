import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import EventListener from 'react-event-listener'
import Help from './Help'
import TitleBlock from './TitleBlock'
import Blips from './Blips'
// import Calibration from './Calibration'
import OfferHelp from './OfferHelp'
// import OpenFileWindow from './OpenFileWindow'
import styles from './Design.css'

import Horizon from '@horizon/client'
// import { blips_db, images_db } from './db_actions'

class Design extends Component {

    constructor(props){
        super(props)

        this.state = {
            helpOffered: true,
            helpVisible: false,
            titleBlockVisible: false,
            pending: '',
            currentBlooprint: 'blooprint',
            bloopAction: 'write',
            color_set: 'black',
            fileWindowVisible: false,
            blips: [],
            blipsVisible: true,
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

    componentWillMount() {
        //  rehydrate state from Horizon
    }

    render() {

        /*
        TODO:
        image will need to be the compiled output image from the blooprint-api
        */
        var imagePath = null
        // var imagePath = design.imagePath
        var backimage = {
            backgroundImage: 'url(' + imagePath + ')',
            backgroundSize: '100% 100%'
        }

        // TODO
        // extract <components /> and replace with function that returns the required component
        return (

            <div className={styles.design} >
                <EventListener target={document} onKeyDown={(e) => this.handleKey(e)} />
                <img className={styles.design} src={imagePath} onDoubleClick={(e) => { this.addBlip(e.clientX,e.clientY) }} />

                { this.state.blipsVisible ? <Blips blips={this.state.blips} /> : null }
                { this.state.helpOffered ? <OfferHelp /> : null }
                { this.state.helpVisible ? <Help /> : null }
                { this.state.titleBlockVisible ? <TitleBlock {...this.state} /> : null }
                { this.state.fileWindowVisible ? <OpenFileWindow {...this.state} /> : null }
            </div>
        )
        // { design.isCalibrating ? <Calibration {...this.props} /> : null }
    }

    addBlip(x,y) {

        const hz = Horizon()

        const blips = hz('blips')

        console.log('adding blip');
        var blipID = this.getStampTime()
        this.setState({
            blips: [
                ...this.state.blips, {
                    id: blipID,
                    x: x,
                    y: y,
                    text: ''
                }
            ]
        })

        blips.store(this.state.blips)

        blips.fetch().subscribe(
            result => console.log('/n',JSON.stringify(result)),
            err => console.error(err),
            () => console.log('Results fetched')
        );
    }

    getStampTime() {
        var yy = new Date().getFullYear().toString()
        var mm = new Date().getMonth().toString()
        var dd = new Date().getDate().toString()
        var h = new Date().getHours().toString()
        var m = new Date().getMinutes().toString()
        var s = new Date().getSeconds().toString()
        var mmm = new Date().getMilliseconds().toString()
        return yy.concat(mm,dd,h,m,s,mmm)
    }

    handleKey(e) {

        const newPending = this.state.pending.concat(e.key).toLowerCase()
        this.setState({
            pending: newPending
        })

        //  marker color handling
        //  handle write/erase/calibrate trigger
        if(this.state.pending.includes('control ')) {
            console.log('bloop')
            var bloopID = getStampTime()
            // this.props.triggerBloop(this.state.bloopAction,bloopID)
            // this.setState({pending: ''})
        }
        else if(this.state.pending.includes('escape')) {
            // this.props.closeFileWindow()
            if(this.state.helpVisible) {
                this.setState({
                    helpVisible:false,
                    pending: ''
                })
            }
        }
        else if(this.state.pending.includes('red')) {
            // this.props.setMarkerColor('#FF0000')
            this.setState({
                color_set: '#FF0000',
                pending: ''
            })
        }
        else if(this.state.pending.includes('blue')) {
            // this.props.setMarkerColor('#0000FF')
            this.setState({
                color_set: '#0000FF',
                pending: ''
            })
        }
        else if(this.state.pending.includes('green')) {
            // this.props.setMarkerColor('#008000')
            this.setState({
                color_set: '#008000',
                pending: ''
            })
        }
        else if(this.state.pending.includes('orange')) {
            // this.props.setMarkerColor('#FFA500')
            this.setState({
                color_set: '#FFA500',
                pending: ''
            })
        }
        else if(this.state.pending.includes('purple')) {
            // this.props.setMarkerColor('#800080')
            this.setState({
                color_set: '#800080',
                pending: ''
            })
        }
        else if(this.state.pending.includes('black')) {
            // this.props.setMarkerColor('#000000')
            this.setState({
                color_set: '#000000',
                pending: ''
            })
        }
        else if(this.state.pending.includes('gray')) {
            // this.props.setMarkerColor('#808080')
            this.setState({
                color_set: '#808080',
                pending: ''
            })
        }
        else if(this.state.pending.includes('brown')) {
            // this.props.setMarkerColor('#A52A2A')
            this.setState({
                color_set: '#A52A2A',
                pending: ''
            })
        }
        //  bloop action handling
        else if(this.state.pending.includes('1')) {
            // this.props.setBloopAction('write')
            this.setState({
                bloopAction: 'write',
                pending: ''
            })
        }
        else if(this.state.pending.includes('2')) {
            // this.props.setBloopAction('erase')
            this.setState({
                bloopAction: 'erase',
                pending: ''
            })
        }
        else if(this.state.pending.includes('3')) {
            // this.props.setBloopAction('calibrate')
            this.setState({
                bloopAction: 'calibrate',
                pending: ''
            })
        }
        //  handle toggle help
        else if(this.state.pending.includes('shift?')) {
            if(this.state.helpVisible) {
                this.setState({
                    helpVisible: false,
                    pending: ''
                })
            }
            else {
                this.setState({
                    helpVisible: true,
                    pending: ''
                })
            }
            // this.props.toggleHelp()
        }
        //  handle toggle title block
        else if(this.state.pending.includes('shift>')) {
            if(this.state.titleBlockVisible) {
                this.setState({
                    titleBlockVisible: false,
                    pending: ''
                })
            }
            else {
                this.setState({
                    titleBlockVisible: true,
                    pending: ''
                })
            }
            // this.props.toggleTitleBlock()
        }
    }
}

export default Design
