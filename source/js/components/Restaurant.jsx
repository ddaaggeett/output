import React, { Component } from 'react'
import { emailConfigs } from '../containers/Contact/emailConfigs'

import RestaurantHome from './ncfr/RestaurantHome'
import MenuHome from './ncfr/MenuHome'

const menuSections = {      // make sure to use index order in ./menuSocket
    restaurantInfo: 0,
    restaurantHours: 1,
    breakfastSpecials: 2,
    breakfastItems: 3,
    lunchSpecials: 4,
    lunchItems: 5,
    dinnerSpecials: 6,
    dinnerItems: 7,
    dessert: 8,
}

class Restaurant extends Component {

    constructor(props) {
        super(props)

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

            console.log(data[menuSections.restaurantInfo])

            // setSpreadsheetData(
            //     data[menuSections.restaurantInfo],
            //     data[menuSections.restaurantHours],
            //     data[menuSections.breakfastSpecials],
            //     data[menuSections.breakfastItems],
            //     data[menuSections.lunchSpecials],
            //     data[menuSections.lunchItems],
            //     data[menuSections.dinnerSpecials],
            //     data[menuSections.dinnerItems],
            //     data[menuSections.dessert],
            // )

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

        const { restaurant, setSpreadsheetData } = this.props

        return (
            <div id="restaurant">
                {
                    restaurant.atHome ? <RestaurantHome restaurantHome={restaurant.restaurantHome} /> : <MenuHome breakfastSpecials={restaurant.breakfastSpecials} />
                }
            </div>
        )
    }
}

export default Restaurant
