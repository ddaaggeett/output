import React from 'react'

import MenuItem from './MenuItem'

const MenuSection = (props) => {

    console.log('loading section\n',props.section)
    return (
        <ul id="menu_section">
            {props.section.map((item) => {
                return (
                    <MenuItem item={item} key={item.id} />
                )
            })}
        </ul>
    )
}

export default MenuSection
