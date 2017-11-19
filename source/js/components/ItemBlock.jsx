import React from 'react'

import MenuItem from './MenuItem'

const ItemBlock = (props) => {
    return (
        <ul>
            {props.menu.map((item) => {
                return (
                    <MenuItem item={item} key={item.id} />
                )
            })}
        </ul>
    )
}

export default ItemBlock
