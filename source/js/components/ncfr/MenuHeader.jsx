import React from 'react'
import { Link } from 'react-router-dom'

const MenuHeader = (props) => {

    console.log('actions\n',props)
    return (
        <div>
            <h1 id="menu_header">{props.restaurantInfo.map((tableline) => {
                if( tableline.item == 'name' ) {
                    return (
                        <div>
                            {tableline.value}
                        </div>
                    )
                }
            })}</h1>

        <div id="nav_viewHome" className="nav_button" onClick={() => {props.actions.action_viewHome()}}><p>back</p></div>

            <div id="menu_buttons">
                <div id="button_breakfast" className="menu_button" onClick={() => {props.actions.action_viewBreakfast()}}><p>breakfast</p></div>
                <div id="button_lunch_dinner" className="menu_button" onClick={() => {props.actions.action_viewLunchDinner()}}><p>lunch | dinner</p></div>
                <div id="button_dessert" className="menu_button" onClick={() => {props.actions.action_viewDessert()}}><p>dessert</p></div>
            </div>
        </div>
    )
}

export default MenuHeader
