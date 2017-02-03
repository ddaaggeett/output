import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import EventListener from 'react-event-listener'
import styles from './TitleBlock.css'

class TitleBlock extends Component {

    constructor(props){
        super(props)
    }

    render() {

        const { color_set, action_pending } = this.props

        var markerColor = {
            background: color_set
        }

        var yy = new Date().getFullYear()
        var MM = new Date().getMonth() + 1
        var dd = new Date().getDate()

        return (
            <div className={styles.main}>
                <div className={styles.info}>
                    <div className={styles.user} onClick={() => this.handleUserClick()} >designer</div>
                    <div className={styles.titlesplit}>/</div>
                    <div className={styles.title} onClick={() => this.handleTitleClick()} >{this.props.fileStructure.currentBlooprint}</div>
                </div>
                <div className={styles.date}>{MM}/{dd}/{yy}</div>
                <div className={styles.markerBox} style={markerColor} />
                <p className={styles.actionPending}>pending BLOOP action = <span className={styles.action}>{ action_pending }</span></p>
                <Link className={styles.linkHome} to='/' ><button>GO HOME</button></Link>
            </div>
        )
    }

    /*
    link to user account info
    */
    handleUserClick() {

    }

    /*
    render blooprint file system to open different/new blooprint
    */
    handleTitleClick() {
        this.props.closeHelp()
        this.props.openFileWindow()
    }
}

export default TitleBlock
