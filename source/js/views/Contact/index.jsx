import React, { Component } from 'react';
import WelcomeMat from '../WelcomeMat'

var io = require('socket.io-client')

class Form extends Component {

    constructor(props) {
        super(props)
        this.socket = io.connect('http://'+require('ip').address()+':1234')
    }

    handleSubmitClick = () => {

        this.socket.emit('submitEmail', {
            email: this.email.value,
            message: this.message.value
        })

        this.email.value = ''
        this.message.value = ''
    }

    render() {

        return (
            <div id="form" className="center_item">
                <input
                    className="form_item"
                    placeholder="your email address"
                    id="email"
                    type="text"
                    ref={(input) => this.email = input} />
                <textarea
                    className="form_item"
                    placeholder="hello, stranger"
                    id="message"
                    type="text"
                    ref={(input) => this.message = input} />
                <button
                    className="button"
                    id="form_submit"
                    onClick={() => {
                        this.handleSubmitClick()
                        console.log('email submit')
                    }}>
                    Send</button>
            </div>
        )
    }
}

class Contact extends Component {

    render() {
        return(
            <div className='body'>

                <WelcomeMat />

                <div id="center_content">
                    <Form />
                </div>

            </div>
        )
    }
}

export default Contact
