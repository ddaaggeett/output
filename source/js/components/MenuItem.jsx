import React from 'react'

const MenuItem = (props) => {
    return (
        <li id="menu_item">{props.item.item} {props.item.side} {props.item.price}</li>
    )
}

export default MenuItem
