import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router'

import Design from '../components/Design';
import * as DesignActions from '../actions/design';

function mapStateToProps(state) {
	return {
		design: state.design
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(DesignActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Design)