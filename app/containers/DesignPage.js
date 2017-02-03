import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import Design from '../components/Design'
import * as DesignActions from '../actions/design'
import * as BlipActions from '../actions/blips'
import * as CalibrationActions from '../actions/calibration'
import * as FileActions from '../actions/fileStructure'

function mapStateToProps(state) {
	return {
		design: state.design,
		blips: state.blips,
		calibration: state.calibration,
		fileStructure: state.fileStructure
	}
}

function mapDispatchToProps(dispatch) {
	//	multiple action creators - send as single object
	//	http://stackoverflow.com/questions/35454633/redux-connect-with-multiples-actions-states
	return bindActionCreators(Object.assign({}, DesignActions, BlipActions, CalibrationActions, FileActions), dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Design)
