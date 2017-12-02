import React, { Component } from 'react';

var blooprintImage = require('../../../assets/img/blooprint.jpg')


class Home extends Component {
    render() {
        return (
            <div className='body'>

                <img id="trademark" src={blooprintImage} alt="trademark" />

                <div id="blue" />
                <div id="green" />
                <div id="red" />

            </div>

        );
    }
}

export default Home
