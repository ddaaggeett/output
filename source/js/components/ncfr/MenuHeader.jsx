import React from 'react'
import { Link } from 'react-router-dom'

const MenuHeader = (props) => {
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
                <div className="menu_button" onClick={() => {props.actions.viewBreakfastMenu()}}><p>breakfast</p></div>
                <div className="menu_button" onClick={() => {props.actions.viewLunchDinnerMenu()}}><p>lunch | dinner</p></div>
                <div className="menu_button" onClick={() => {props.actions.viewDessertMenu()}}><p>dessert</p></div>
            </div>
        </div>
    )
}

export default MenuHeader
