import capture from '../../api/capture'
import runAPI from '../../api/runAPI'
import { execSync } from 'child_process'

const initialState = {
	color_pending: '',
    color_set: 'black',
    helpVisible: false,
    titleBlockVisible: false,
    action_pending: 'write',
	isCalibrating: false,
	blipsVisible: true,
	image: 'blank',
	imagePath: '../api/blooprints/blank.jpg',
	currentBlooprint: 'blooprint'
}

export default function design(state = initialState, action) {
	switch (action.type) {

		case 'SET_BLOOP_ACTION':
			return {
				...state,
				action_pending: action.bloopAction
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

		case 'KEY_PRESSED':

			const pending = state.color_pending.concat(action.key).toLowerCase()

			//	trigger action_pending
			if (pending.includes('control ')) {

				switch(state.action_pending) {

					case 'calibrate':

						console.log('triggering camera @ ',action.stamp)
						capture(action.stamp)

						return {
							...state,
							isCalibrating: true,
							blipsVisible: false,
							titleBlockVisible: false,
							helpVisible: false,
							color_pending: '',
							action_pending: 'write',
							image: action.stamp,
							imagePath: '../api/sketches/' + action.stamp + '.jpg'
						}

					case 'write':

						var sizeBefore = execSync('du ./api/sketches/').toString().trim()
						console.log('sizeBefore = ',sizeBefore)

						console.log('triggering camera @ ',action.stamp)
						capture(action.stamp)

						var sizeAfter = ''
						var flag = true
						while ( flag ) {
							sizeAfter = execSync('du ./api/sketches/').toString().trim()
							console.log('checking again')
							if ( sizeBefore !== sizeAfter ) {
								console.log('sizeAfter = ',sizeAfter)
								flag = false
							}
						}

						sizeBefore = execSync('du ./api/blooprints/').toString().trim()
						console.log('sizeBefore = ',sizeBefore)

						runAPI(action.stamp,state.image,'write',state.color_set)

						sizeAfter = ''
						var flag = true
						while ( flag ) {
							sizeAfter = execSync('du ./api/blooprints/').toString().trim()
							console.log('checking again')
							if ( sizeBefore !== sizeAfter ) {
								console.log('sizeAfter = ',sizeAfter)
								flag = false
							}
						}

						return {
							...state,
							color_pending: '',
							action_pending: 'write',
							image: action.stamp,
							imagePath: '../api/blooprints/' + action.stamp + '.jpg'
						}

					case 'erase':

						var sizeBefore = execSync('du ./api/sketches/').toString().trim()
						console.log('sizeBefore = ',sizeBefore)

						console.log('triggering camera @ ',action.stamp)
						capture(action.stamp)

						var sizeAfter = ''
						var flag = true
						while ( flag ) {
							sizeAfter = execSync('du ./api/sketches/').toString().trim()
							console.log('checking again')
							if ( sizeBefore !== sizeAfter ) {
								console.log('sizeAfter = ',sizeAfter)
								flag = false
							}
						}

						sizeBefore = execSync('du ./api/blooprints/').toString().trim()
						console.log('sizeBefore = ',sizeBefore)

						runAPI(action.stamp,state.image,'erase','null')

						sizeAfter = ''
						var flag = true
						while ( flag ) {
							sizeAfter = execSync('du ./api/blooprints/').toString().trim()
							console.log('checking again')
							if ( sizeBefore !== sizeAfter ) {
								console.log('sizeAfter = ',sizeAfter)
								flag = false
							}
						}

						return {
							...state,
							color_pending: '',
							action_pending: 'write',
							image: action.stamp,
							imagePath: '../api/blooprints/' + action.stamp + '.jpg'
						}
				}
			}

			// //	set action_pending
			// if (pending.includes('1')) {
			// 	return {
			// 		...state,
			// 		action_pending: 'write'
			// 	}
			// }
			// else if (pending.includes('2')) {
			// 	return {
			// 		...state,
			// 		action_pending: 'erase'
			// 	}
			// }
			// else if (pending.includes('3')) {
			// 	return {
			// 		...state,
			// 		action_pending: 'calibrate'
			// 	}
			// }

			//	toggle help visibility
			if (pending.includes('shift?')) {
				if(!state.helpVisible){
					return {
						...state,
						helpVisible: true,
						color_pending: ''
					}
				}
				else{
					return {
						...state,
						helpVisible: false,
						color_pending: ''
					}
				}
			}

			//	toggle title block visibility
			if (pending.includes('shift>')) {
				if(!state.titleBlockVisible){
					return {
						...state,
						titleBlockVisible: true,
						color_pending: ''
					}
				}
				else{
					return {
						...state,
						titleBlockVisible: false,
						color_pending: ''
					}
				}
			}


			return {
				...state,
				color_pending: pending
			}


		default:
			return state
	}
}
