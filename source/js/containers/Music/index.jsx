import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import WelcomeMat from '../WelcomeMat'

var audioStyle = require('./audioplayer.scss')
var AudioPlayer = require('react-responsive-audio-player')

const playlist = [
    {
        url: '../../../assets/audio/dude_you_need_to_tune.wav',
        displayText: 'dude, you need to tune'
    }
]

class Music extends Component {

    showOccupation() {
        console.log("hello")
    }


    render() {

        return (
            <div className='body'>

                <WelcomeMat />

                <div id="center_content">
                    <AudioPlayer id="audio" playlist={playlist} autoplay={false} style={audioStyle} />
                </div>
            </div>
        )
    }
}

export default Music
