import React, { Component } from 'react';
import WelcomeMat from '../WelcomeMat'
import { emailConfigs } from './emailConfigs'

var io = require('socket.io-client')

class Form extends Component {

    constructor(props) {
        super(props)

        if (process.env.NODE_ENV == "production") {
            console.log('socket.io host server is PRODUCTION mode')
            this.socket = io.connect('http://' + emailConfigs.ipv4_address + ':1234')
        }
        else {
            console.log('socket.io host server is DEV mode')
            this.socket = io.connect('http://localhost:1234')
        }
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
