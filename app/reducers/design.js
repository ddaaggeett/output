// import capture from '../../api/capture'
// import runAPI from '../../api/runAPI'
// import { execSync } from 'child_process'

var path = require('path')

const initialState = {
	color_set: '#000000',
    helpVisible: false,
    titleBlockVisible: false,
    bloopAction: 'write',
	isCalibrating: false,
	blipsVisible: true,
	image: 'white',
	imgReserve: 'white',
	prepImage: 'black',
	currentBlooprint: 'blooprint'
}

export default function design(state = initialState, action) {
	switch (action.type) {

		case 'SET_IMAGE':
			return {
				...state,
				image: action.img_id,
				imgReserve: action.img_id,
				blipsVisible: true
			}

 		case 'PREP_BACKGROUND':
			if(state.image === 'black') {
				return {
					...state,
					image: state.imgReserve,
					blipsVisible: true
				}
			}
			else {
				return {
					...state,
					image: 'black',
					helpVisible: false,
					titleBlockVisible: false,
					blipsVisible: false
				}
			}

		case 'TRIGGER_BLOOP':

			switch(action.bloopAction) {

				case 'write':

				/*
				TODO:
				this will be where the user prepares the projection to go BLACK
				blooprint/output then awaits the blooprint/input client to capture and send image
				upon retrieval projector image will return to normal display with updated/pending image (possibly a progress bar?)
				*/

					// return {
					// 	...state,
					// 	bloopAction: 'write',
					// 	image: action.stampTime,
					// 	imagePath: '../api/blooprints/' + action.stampTime + '.jpg'
					// }

				case 'erase':

					// return {
					// 	...state,
					// 	bloopAction: 'write',
					// 	image: action.stampTime,
					// 	imagePath: '../api/blooprints/' + action.stampTime + '.jpg'
					// }
			}

		case 'TOGGLE_TITLE_BLOCK':
			if(!state.titleBlockVisible){
				return {
					...state,
					titleBlockVisible: true
				}
			}
			else{
				return {
					...state,
					titleBlockVisible: false
				}
			}

		case 'TOGGLE_HELP':
			if(!state.helpVisible){
				return {
					...state,
					helpVisible: true
				}
			}
			else{
				return {
					...state,
					helpVisible: false
				}
			}



		case 'SET_BLOOP_ACTION':
			return {
				...state,
				bloopAction: action.bloopAction
			}

		case 'SET_MARKER_COLOR':
			return {
				...state,
				color_set: action.markerColor
			}

		case 'CLOSE_HELP':
			return {
				...state,
				helpVisible: false
			}

		case 'FINISH_CALIBRATION':

			runAPI(state.image,'null','calibrate','null')

			return {
				...state,
				isCalibrating: false,
				blipsVisible: true
			}

		default:
			return state
	}
}
