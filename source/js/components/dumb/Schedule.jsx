import React from 'react'
import ScheduleItem from './ScheduleItem'

const Schedule = (props) => {

    return (
        <ul id="schedule">
            {props.restaurant.restaurantHours.map((item) => {
                return (
                    <ScheduleItem item={item} key={item.id} />
                )
            })}
        </ul>
    )
}

export default Schedule
