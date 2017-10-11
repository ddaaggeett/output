import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { PieChart, Pie, Tooltip } from 'recharts'
import { occupation } from '../Home/data'

var AudioPlayer = require('react-responsive-audio-player')


var profileImage = require('../../../assets/img/profile.jpg')
var twitterIcon = require('../../../assets/img/twitter_a.png')
var emailIcon = require('../../../assets/img/email_c.png')
var softwareIcon = require('../../../assets/img/github_b.png')
var audioStyle = require('../Home/audioplayer.scss')

const playlist = [
    {
        url: '../../../assets/audio/20171010135430.wav',
        displayText: 'just practice'
    }
]

class WelcomeMat extends Component {

    render() {

        return (
            <div className='body'>
                <div id="right_column">
                    <h1 className="left_item" id="greet">hi, i'm <span id="name">Dave</span></h1>

                    <div id="occupation" className="left_item" >
                        <div id="occ"><p className="occupation_detail">i'm two parts father,</p><p className="occupation_detail">one part engineer</p></div>
                        <div id="chart">
                            <PieChart width={800} height={400} onMouseEnter={() => this.showOccupation()}>
                                <Pie startAngle={90} endAngle={270} data={occupation} cx={396} cy={200} fill="#ffd700" innerRadius={80} outerRadius={150} />
                            </PieChart>
                        </div>
                    </div>

                    <p className="intro">i make my life for my children</p>
                    <p className="intro">my core interests lie within developing minimum viable products for proper market testing</p>

                    <Link to={'/projects'}><div id="button"><p>i make things</p></div></Link>

                </div>

                <div id="left_column">
                    <img className="media_item" id="profile_pic" src={profileImage} alt="profile image" />
                    <div className="media_item" id="contact_me">
                        <a className="icon" href="https://david.g.daggett@gmail.com">
                            <img src={emailIcon} alt="email" style={{width: 40, height: 31}} /></a>
                        <a className="icon" href="https://github.com/ddaaggeett">
                            <img src={softwareIcon} alt="software" style={{width: 40, height: 36}} /></a>
                        <a className="icon" href="https://twitter.com/ddaaggeett"> <img src={twitterIcon} alt="social" style={{width: 40, height: 40}} /></a>
                    </div>
                </div>

            </div>
        );
    }
}

export default WelcomeMat
