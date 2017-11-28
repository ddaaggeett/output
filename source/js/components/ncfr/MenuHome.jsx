import React from 'react'
import { Link } from 'react-router-dom'

import MenuHeader from './MenuHeader'
import MenuSection from './MenuSection'

const MenuHome = (props) => {
    return (
        <div>
            <MenuHeader
                className="menu_block"
                actions={props.actions}
                restaurant={props.restaurant}
                restaurantInfo={props.restaurantInfo} />
            <MenuSection
                className="menu_block"
                section={props.section} />
        </div>
    )
}

export default MenuHome
