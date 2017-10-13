import React, { Component } from 'react';
import WelcomeMat from '../WelcomeMat'

const Form = () => {
    return (
        <form
            id="form"
            className="center_item"
            action=""
            method="post"
            role="form">
            <input
                type="hidden"
                name="_next"
                defaultValue="/" />
            <div className="row">
                <div>
                    <input
                        className="form_item"
                        id="email"
                        name="cf_email"
                        placeholder="your email address"
                        type="email"
                        required />
                </div>
                <div>
                    <textarea
                        className="form_item"
                        id="message"
                        name="cf_message"
                        placeholder="tell me something"
                        rows={5} />
                </div>
                <div className="">
                    <button
                        className="button"
                        id="form_submit"
                        type="submit"
                        value="Send">Send</button>
                </div>
            </div>
        </form>
    )
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
