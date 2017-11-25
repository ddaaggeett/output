import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { PieChart, Pie, Tooltip } from 'recharts'
import { occupation } from '../Home/data'

var profileImage = require('../../../assets/img/profile.jpg')
var twitterIcon = require('../../../assets/img/twitter_a.png')
var emailIcon = require('../../../assets/img/email_c.png')
var softwareIcon = require('../../../assets/img/github_c.png')

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
                        <div id="occ"><p className="occupation_detail">two parts father,</p><p className="occupation_detail">one part engineer</p></div>
                        <div id="chart">
                            <PieChart width={800} height={400} onMouseEnter={() => this.showOccupation()}>
                                <Pie
                                    startAngle={90}
                                    endAngle={270}
                                    data={occupation}
                                    cx={396} cy={200}
                                    fill="#ffd700"
                                    innerRadius={80}
                                    outerRadius={150}
                                    dataKey="value" />
                            </PieChart>
                        </div>
                    </div>

                    <div id="iam">
                        <h4 className="intro">i make my life for my children</h4>
                        <h4 className="intro">i am a shade tree mechanic</h4>
                    </div>

                    <div id="buttons">
                        <Link to={'/'}><div className="button"><p>home</p></div></Link>
                        <Link to={'/projects'}><div className="button"><p>i make things</p></div></Link>
                        <Link to={'/contact'}><div className="button"><p>contact me</p></div></Link>
                    </div>

                </div>

                <div id="left_column">
                    <img className="media_item" id="profile_pic" src={profileImage} alt="profile image" />
                    <div className="media_item" id="contact_me">

                        <a
                            className="icon"
                            href="https://github.com/ddaaggeett"
                            target="_blank" >
                            <img
                                src={softwareIcon}
                                alt="software"
                                style={{width: 45, height: 45, marginLeft: -2}} /></a>

                        <a
                            className="icon"
                            href="https://twitter.com/ddaaggeett"
                            target="_blank" >
                            <img
                                src={twitterIcon}
                                alt="social"
                                style={{width: 40, height: 40}} /></a>

                    </div>
                </div>

            </div>
        );
    }
}

export default WelcomeMat
