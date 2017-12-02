import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Blooprint from '../../components/Blooprint'

import * as RestaurantActions from '../../actions/restaurant'

function mapStateToProps(state) {
	return {
		restaurant: state.restaurant
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(Object.assign({}, RestaurantActions), dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Blooprint)
