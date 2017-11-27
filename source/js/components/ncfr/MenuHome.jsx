import React from 'react'
import { Link } from 'react-router-dom'

import MenuHeader from './MenuHeader'
import MenuSection from './MenuSection'


const MenuHome = (props) => {

    return (
        <div>
            <MenuHeader
                className="menu_block"
                restaurantHome={props.restaurantHome} />
            <MenuSection
                className="menu_block"
                breakfastSpecials={props.breakfastSpecials} />
        </div>
    )
}

export default MenuHome
