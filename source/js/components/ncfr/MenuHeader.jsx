import React from 'react'
import { Link } from 'react-router-dom'

const MenuHeader = (props) => {

    console.log('restaurantInfo\n',props.restaurantHome)

    return (
        <div>
            <h1 id="menu_header">North Chili Family Restaurant</h1>
            <div id="menu_buttons">
                <Link to={'/ncfr/breakfast'}><div className="menu_button"><p>breakfast</p></div></Link>
                <Link to={'/ncfr/dinner'}><div className="menu_button"><p>dinner</p></div></Link>
            </div>
        </div>
    )
}

export default MenuHeader
