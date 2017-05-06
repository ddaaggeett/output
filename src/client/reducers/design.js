// import capture from '../../api/capture'
// import runAPI from '../../api/runAPI'
// import { execSync } from 'child_process'

const initialState = {
	color_set: '#000000',
    helpVisible: false,
    titleBlockVisible: false,
    bloopAction: 'write',
	isCalibrating: false,
	blipsVisible: true,
	image: 'blank',
	imagePath: '../api/blooprints/blank.jpg',
	currentBlooprint: 'blooprint'
}

export default function design(state = initialState, action) {
	switch (action.type) {

		case 'TRIGGER_BLOOP':

			switch(action.bloopAction) {
				case 'calibrate':

					// capture(action.stampTime)
					//
					// return {
					// 	...state,
					// 	isCalibrating: true,
					// 	blipsVisible: false,
					// 	titleBlockVisible: false,
					// 	helpVisible: false,
					// 	bloopAction: 'write',
					// 	image: action.stampTime,
					// 	imagePath: '../api/sketches/' + action.stampTime + '.jpg'
					// }

				case 'write':

				/*
				TODO:
				this will be where the user prepares the projection to go BLACK
				blooprint/output then awaits the blooprint/input client to capture and send image
				upon retrieval projector image will return to normal display with updated/pending image (possibly a progress bar?)
				*/

					// var sizeBefore = execSync('du ./api/sketches/').toString().trim()
					// console.log('sizeBefore = ',sizeBefore)
					//
					// console.log('triggering camera @ ',action.stampTime)
					// capture(action.stampTime)
					//
					// var sizeAfter = ''
					// var flag = true
					// while ( flag ) {
					// 	sizeAfter = execSync('du ./api/sketches/').toString().trim()
					// 	console.log('checking again')
					// 	if ( sizeBefore !== sizeAfter ) {
					// 		console.log('sizeAfter = ',sizeAfter)
					// 		flag = false
					// 	}
					// }
					//
					// sizeBefore = execSync('du ./api/blooprints/').toString().trim()
					// console.log('sizeBefore = ',sizeBefore)
					//
					// runAPI(action.stampTime,state.image,'write',state.color_set.substring(1))
					//
					// sizeAfter = ''
					// var flag = true
					// while ( flag ) {
					// 	sizeAfter = execSync('du ./api/blooprints/').toString().trim()
					// 	console.log('checking again')
					// 	if ( sizeBefore !== sizeAfter ) {
					// 		console.log('sizeAfter = ',sizeAfter)
					// 		flag = false
					// 	}
					// }
					//
					// return {
					// 	...state,
					// 	bloopAction: 'write',
					// 	image: action.stampTime,
					// 	imagePath: '../api/blooprints/' + action.stampTime + '.jpg'
					// }

				case 'erase':

					// var sizeBefore = execSync('du ./api/sketches/').toString().trim()
					// console.log('sizeBefore = ',sizeBefore)
					//
					// console.log('triggering camera @ ',action.stampTime)
					// capture(action.stampTime)
					//
					// var sizeAfter = ''
					// var flag = true
					// while ( flag ) {
					// 	sizeAfter = execSync('du ./api/sketches/').toString().trim()
					// 	console.log('checking again')
					// 	if ( sizeBefore !== sizeAfter ) {
					// 		console.log('sizeAfter = ',sizeAfter)
					// 		flag = false
					// 	}
					// }
					//
					// sizeBefore = execSync('du ./api/blooprints/').toString().trim()
					// console.log('sizeBefore = ',sizeBefore)
					//
					// runAPI(action.stampTime,state.image,'erase','null')
					//
					// sizeAfter = ''
					// var flag = true
					// while ( flag ) {
					// 	sizeAfter = execSync('du ./api/blooprints/').toString().trim()
					// 	console.log('checking again')
					// 	if ( sizeBefore !== sizeAfter ) {
					// 		console.log('sizeAfter = ',sizeAfter)
					// 		flag = false
					// 	}
					// }
					//
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
