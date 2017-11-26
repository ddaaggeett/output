import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { PieChart, Pie, Tooltip } from 'recharts'
import { occupation } from './data'

import WelcomeMat from '../WelcomeMat'

class Home extends Component {

    showOccupation() {
        console.log("hello")
    }


    render() {

        return (
            <div className='body'>

                <WelcomeMat />

                <div id="center_content">
                    <h4 className="topic"><span id="warning">to my fellow :</span></h4>
                    <iframe className="center_item" id="video" width={560} height={315} src="https://www.youtube.com/embed/XbOeO_frzvg" frameborder={0} allowfullscreen />
                    <iframe className="center_item" id="video" width={560} height={315} src="https://www.youtube.com/embed/Cf2nqmQIfxc" frameborder={0} allowfullscreen />
                    <div className="center_item" id="quotes">
                        <p className="quote">"people think about creativity as if it's all sweetness and light. no. if you're gonna be creative it's because you're tormented by a problem" - <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0ahUKEwiW4ubb1K3WAhWE8YMKHY4VDzEQtwIIKDAA&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D6G59zsjM2UI&usg=AFQjCNGEf9V3FtTZRRvhjUayxLJuIOeiXg">jbp</a></p>
                        <p className="quote">why has 'talent' somehow become an actual replacement for 'obsession and practice'
                            <a href="https://twitter.com/ddaaggeett/status/909594140048072704">?</a></p>
                        <p className="quote">and then when they tell you what <strong>x</strong> ought to be, go yourself to find <strong>f(x)</strong> alone, as is
                            <a href="https://twitter.com/ddaaggeett/status/921005117037580288">.</a></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home
