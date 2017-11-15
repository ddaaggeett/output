import React, { Component } from 'react'
import { emailConfigs } from '../Contact/emailConfigs'

import MenuHeader from '../../components/MenuHeader'

class NCFR extends Component {

    constructor(props) {
        super(props)

        this.menu = null

        var io = require('socket.io-client')
        if (process.env.NODE_ENV == "production") {
            console.log('socket.io host server is PRODUCTION mode')
            this.socket = io.connect('http://' + emailConfigs.ipv4_address + ':1235')
        }
        else {
            console.log('socket.io host server is DEV mode')
            this.socket = io.connect('http://localhost:1235')
        }
    }

    componentWillMount() {
        this.socket.emit('getMenuData')
    }

    componentDidMount() {
        this.socket.on('mountMenuData', function(data) {
            this.menu = data
            console.log('menu = ',this.menu)
        })

    }

    render () {


        return (
            <div>
                <MenuHeader />
            </div>
        )
    }
}

export default NCFR
