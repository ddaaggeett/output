import React from 'react'
import { Link } from 'react-router-dom'

import MenuHeader from './MenuHeader'
import MenuSection from './MenuSection'


const RestaurantHome = (props) => {

    return (
        <div id="restaurant_home">
            <h1 className="restaurant_home_item">WELCOME TO</h1>
            <h1 className="restaurant_home_item" id="restaurant_name">{props.restaurantHome.map((tableline) => {
                if( tableline.item == 'name' ) {
                    return (
                        <div>
                            {tableline.value}
                        </div>
                    )
                }
            })}</h1>


        <div id="hours_of_operation">
                <h4>hours of operation</h4>

            </div>

        </div>
    )
}

export default RestaurantHome
