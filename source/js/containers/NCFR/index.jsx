import React, { Component } from 'react'
import { emailConfigs } from '../Contact/emailConfigs'

import MenuHeader from '../../components/ncfr/MenuHeader'
import MenuSection from '../../components/ncfr/MenuSection'

class NCFR extends Component {

    constructor(props) {
        super(props)

        this.state = {
            menu: []
        }

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
            this.setState({
                menu: data
            }, function() {
                console.log('mounted state:\n',this.state)
            })
        }.bind(this))
    }

    render () {
        console.log('rendered state:\n',this.state)

        return (
            <div id="ncfr">
                <MenuHeader className="menu_block" />
                <MenuSection className="menu_block" menu={this.state.menu} />
            </div>
        )
    }
}

export default NCFR
