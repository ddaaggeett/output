import React, { Component } from 'react';

import { Button } from 'react-bootstrap';

class Projects extends Component {



    render() {
        return (
            <div className='body'>
                <p className="intro" id="projects">ongoing projects:
                    <a href="https://github.com/blooprint" id="blooprint"> blooprint</a>,
                    <span id="ned"> vext</span>,
                    <span id="ned"> ned</span>,
                    <span id="ned"> zzapp</span>,
                    <span id="ned"> music</span>,
                    <span id="ned"> philosophy</span>,
                    <a href="https://www.facebook.com/northchilifamilyrestaurant/" id="blooprint"> NCFR</a>,
                    <a href="http://www.nltk.org/book/"> nlp</a>,
                    <a href="https://github.com/off99555/machine-learning-curriculum"> ml</a>,
                    <a href="http://www.uppermonroeavenue.org/" id="umna"> UMNA</a>,
                    <span className="blinking-cursor"> |</span>,
                    <a href="http://www.xyzline.xyz" id="xyzline"> assembly line</a></p>

            </div>
        );
    }
}

export default Projects
