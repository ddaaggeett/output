import React, { Component } from 'react';

import WelcomeMat from '../WelcomeMat'


class Projects extends Component {



    render() {
        return (
            <div className='body'>

                <WelcomeMat />

                <div id="center_content">
                    <div id="projects">

                        <h2>ongoing projects</h2>

                        <a href="https://github.com/blooprint" id="blooprint"> blooprint</a>,
                        <span id="ned"> vext</span>,
                        <span id="ned"> ned</span>,
                        <span id="ned"> zzapp</span>,
                        <span id="ned"> music</span>,
                        <a href="https://www.facebook.com/northchilifamilyrestaurant/" id="blooprint"> NCFR</a>,
                        <a href="http://www.nltk.org/book/"> nlp</a>,
                        <a href="https://github.com/off99555/machine-learning-curriculum"> ml</a>,
                        <a href="http://www.uppermonroeavenue.org/" id="umna"> UMNA</a>,
                        <span className="blinking-cursor"> |</span>,
                        <a href="http://www.xyzline.xyz" id="xyzline"> assembly line</a></div>

                    </div>

            </div>
        );
    }
}

export default Projects
