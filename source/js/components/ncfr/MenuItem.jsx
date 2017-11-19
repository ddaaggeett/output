import React from 'react'
import Item from './Item'
import Side from './Side'
import Price from './Price'

const MenuItem = (props) => {
    return (
        <li id="menu_item">
            <div className="item_lr">
                <Item item={props.item.item} />
                <Side side={props.item.side} />
            </div>
            <Price className="item_lr" price={props.item.price} />
        </li>
    )
}

export default MenuItem
