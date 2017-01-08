import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import EventListener from 'react-event-listener'
import styles from './TitleBlock.css'

class TitleBlock extends Component {

    constructor(props){
        super(props)
    }

    render() {

        const { } = this.props

        return (
            <div className={styles.main}>
                Title Block
            </div>
        )
    }
}

export default TitleBlock