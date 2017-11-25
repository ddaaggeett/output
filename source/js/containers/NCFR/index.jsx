import React, { Component } from 'react'
import { emailConfigs } from '../Contact/emailConfigs'

import MenuHeader from '../../components/ncfr/MenuHeader'
import MenuSection from '../../components/ncfr/MenuSection'

const menuSections = {
    restaurantHome: 1,
    breakfastSpecials: 0,
    breakfastItems: 3,
    lunchSpecials: 4,
    lunchItems: 5,
    dinnerSpecials: 6,
    dinnerItems: 7,
    dessert: 8,
}

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

        this.handleBrowserTitleChange('NCFR')

        this.socket.on('mountMenuData', function(data) {
            this.setState({
                menu: data[menuSections.breakfastSpecials]
            }, function() {
                console.log('mounted state:\n',this.state)
            })
        }.bind(this))
    }

    handleBrowserTitleChange = function(title) {
        document.title = title
        var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
        link.type = 'image/x-icon';
        link.rel = 'shortcut icon';
        link.href = '../../../assets/img/food.ico';
        document.getElementsByTagName('head')[0].appendChild(link);
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
