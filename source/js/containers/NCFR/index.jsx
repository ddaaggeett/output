import React, { Component } from 'react'
import { emailConfigs } from '../Contact/emailConfigs'

import RestaurantHome from '../../components/ncfr/RestaurantHome'

const menuSections = {      // make sure to use index order in ./menuSocket
    restaurantHome: 0,
    breakfastSpecials: 1,
    breakfastItems: 2,
    lunchSpecials: 3,
    lunchItems: 4,
    dinnerSpecials: 5,
    dinnerItems: 6,
    dessert: 7,
}

class NCFR extends Component {

    render () {
        return (
            <div id="ncfr">
                <RestaurantHome restaurantHome={this.state.restaurantHome} breakfastSpecials={this.state.breakfastSpecials} />
            </div>
        )
    }

    constructor(props) {
        super(props)

        this.state = {
            restaurantHome: [],
            breakfastSpecials: [],
            breakfastItems: [],
            lunchSpecials: [],
            lunchItems: [],
            dinnerSpecials: [],
            dinnerItems: [],
            dessert: []
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
                restaurantHome: data[menuSections.restaurantHome],
                breakfastSpecials: data[menuSections.breakfastSpecials]
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

}

export default NCFR
