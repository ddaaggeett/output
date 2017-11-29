import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Restaurant from '../components/Restaurant'

import * as RestaurantActions from '../actions/restaurant'

function mapStateToProps(state) {
	return {
		restaurant: state.restaurant
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(Object.assign({}, RestaurantActions), dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Restaurant)
