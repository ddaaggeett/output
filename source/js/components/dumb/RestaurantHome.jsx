import React from 'react'
import { Link } from 'react-router-dom'

import MenuHeader from './MenuHeader'
import MenuSection from './MenuSection'
import Schedule from './Schedule'


const RestaurantHome = (props) => {

    console.log('hours\n',props)

    return (
        <div id="restaurant_home">
            <h1 className="restaurant_home_item">WELCOME TO</h1>
            <h1 className="restaurant_home_item" id="restaurant_name">{props.restaurantInfo.map((tableline) => {
                if( tableline.item == 'name' ) {
                    return (
                        <div>
                            {tableline.value}
                        </div>
                    )
                }
            })}</h1>

            <div className="nav_button" onClick={() => {props.actions.action_viewBreakfast()}}><p>view menu</p></div>

            <div>
                <h4 id="schedule_header" className="schedule_container_item">{props.restaurantInfo.map((tableline) => {
                    if( tableline.item == 'slogan' ) {
                        return (
                            <div>
                                {tableline.value}
                            </div>
                        )
                    }
                })}</h4>
                <Schedule className="schedule_container_item" restaurant={props.restaurant} />
            </div>

        </div>
    )
}

export default RestaurantHome
