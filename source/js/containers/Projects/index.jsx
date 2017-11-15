import React, { Component } from 'react';
import { Link} from 'react-router-dom'

import WelcomeMat from '../WelcomeMat'


class Projects extends Component {



    render() {
        return (
            <div className='body'>

                <WelcomeMat />

                <div id="center_content">
                    <div id="projects">

                        <h2>ongoing projects</h2>


                    </div>



                    <div id="projects">
                        <a href="https://github.com/blooprint" className='project_button'><p>Blooprint</p></a>
                        <Link to={'/music'}><div className="project_button"><p>music</p></div></Link>
                        <Link to={'/ncfr'}><div className="project_button"><p>NCFR</p></div></Link>
                        <a href="http://www.uppermonroeavenue.org/" className='project_button'><p>UMNA</p></a>
                        <Link to={'/study'}><div className="project_button"><p>self study</p></div></Link>
                        <span className="blinking-cursor">...</span>
                    </div>

                </div>

            </div>
        );
    }
}

export default Projects
