import React from 'react'
// import { ViewHome } from './ViewHome'
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
            <div id="menu_buttons">
                <div className="menu_button" onClick={() => {props.actions.action_viewBreakfast()}}><p>breakfast</p></div>
                <div className="menu_button" onClick={() => {props.actions.action_viewLunchDinner()}}><p>lunch | dinner</p></div>
                <div className="menu_button" onClick={() => {props.actions.action_viewDessert()}}><p>dessert</p></div>
            </div>
        </div>
    )
}

export default MenuHeader
