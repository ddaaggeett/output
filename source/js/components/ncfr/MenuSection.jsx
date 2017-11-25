import React from 'react'

import MenuItem from './MenuItem'

const MenuSection = (props) => {
    return (
        <ul id="menu_section">
            {props.breakfastSpecials.map((item) => {
                return (
                    <MenuItem item={item} key={item.id} />
                )
            })}
        </ul>
    )
}

export default MenuSection
