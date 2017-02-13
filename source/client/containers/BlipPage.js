import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router'

import Blip from '../components/Blip';
import * as DesignActions from '../actions/design';
import * as BlipActions from '../actions/blips';

function mapStateToProps(state) {
	return {
		blips: state.blips
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(BlipActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Blip)