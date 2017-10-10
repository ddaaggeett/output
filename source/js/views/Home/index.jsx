import React, { Component } from 'react'

import { PieChart, Pie, Tooltip } from 'recharts'
import { occupation } from './data'
console.log("tseting : ", occupation)

var profileImage = require('../../../assets/img/profile.jpg')
var twitterIcon = require('../../../assets/img/twitter_a.png')
var emailIcon = require('../../../assets/img/email_c.png')
var softwareIcon = require('../../../assets/img/github_b.png')

class Home extends Component {

    showOccupation() {
        console.log("hello")
    }

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

                    <div id="button"><p>i make things</p></div>

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

                <div id="center_content">
                    <h4 className="topic"><span id="warning">to my fellow :</span></h4>
                    <iframe className="center_item" id="video" width={560} height={315} src="https://www.youtube.com/embed/XbOeO_frzvg" frameborder={0} allowfullscreen />
                    <iframe className="center_item" id="video" width={560} height={315} src="https://www.youtube.com/embed/Cf2nqmQIfxc" frameborder={0} allowfullscreen />
                    <div className="center_item" id="quotes">
                        <p className="quote">"people think about creativity as if it's all sweetness and light. no. if you're gonna be creative it's because you're tormented by a problem" - <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0ahUKEwiW4ubb1K3WAhWE8YMKHY4VDzEQtwIIKDAA&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D6G59zsjM2UI&usg=AFQjCNGEf9V3FtTZRRvhjUayxLJuIOeiXg">jbp</a></p>
                        <p className="quote">why has 'talent' somehow become an actual replacement for 'obsession and practice'
                            <a href="https://twitter.com/ddaaggeett/status/909594140048072704">?</a></p>
                    </div>
                    <h4 className="topic"><span id="warning">phonetics of a jibber jabber ...</span></h4>

                </div>

            </div>
        );
    }
}

export default Home
