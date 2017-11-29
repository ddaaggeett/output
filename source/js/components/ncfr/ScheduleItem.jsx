import React from 'react'
import Day from './Day'
import Time from './Time'

const ScheduleItem = (props) => {

    // console.log('MenuItem props\n',props)
    return (
        <li className="schedule_item">
            <Day day={props.item.day} />
            <Time time={props.item.time} />
        </li>
    )
}

export default ScheduleItem
