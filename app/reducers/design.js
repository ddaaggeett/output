import capture from '../../api/capture'

const initialState = {
	color_pending: '',
    color_set: 'black',
    helpVisible: false,
    titleBlockVisible: false,
    action_pending: 'write',
	isCalibrating: false,
	blipsVisible: true,
	image: ''
}

export default function design(state = initialState, action) {
	switch (action.type) {

		case 'LEAVE_CALIBRATION':
			return {
				...state,
				isCalibrating: false,
				blipsVisible: true
			}

		case 'KEY_PRESSED':

			const pending = state.color_pending.concat(action.key).toLowerCase()

			//	trigger action_pending
			if (pending.includes('control ')) {
				if((state.action_pending === 'write')||(state.action_pending === 'erase')||(state.action_pending === 'calibrate')){

					if(state.action_pending === 'calibrate') {

						///////////////////////////////////////////////
						// TODO:
						// camera capture trigger
						console.log('triggering camera @ ',action.stamp)
						capture(action.stamp)
						///////////////////////////////////////////////

						return {
							...state,
							isCalibrating: true,
							blipsVisible: false,
							titleBlockVisible: false,
							helpVisible: false,
							color_pending: '',
							action_pending: 'write',
							// TODO:	find better location for calibration image
							image: '../api/sketches/' + action.stamp + '.jpg'
						}
					}

					///////////////////////////////////////////////
					// TODO:
					// camera capture trigger
					console.log('triggering camera @ ',action.stamp)
					capture(action.stamp)
					// run image through API
					///////////////////////////////////////////////

					return {
						...state,
						color_pending: '',
						action_pending: 'write',
						// TODO: find better location for compiled blooprint image
						image: '../api/sketches/' + action.stamp + '.jpg'
					}
				}
			}

			//	set action_pending
			if (pending.includes('1')) {
				return {
					...state,
					action_pending: 'write'
				}
			}
			else if (pending.includes('2')) {
				return {
					...state,
					action_pending: 'erase'
				}
			}
			else if (pending.includes('3')) {
				return {
					...state,
					action_pending: 'calibrate'
				}
			}

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

			//	marker color control
			if (pending.includes('red')) {
				return {
					...state,
					color_set: 'red',
					color_pending: ''
				}
			}
			else if (pending.includes('blue')) {
				return {
					...state,
					color_set: 'blue',
					color_pending: ''
				}
			}
			else if (pending.includes('green')) {
				return {
					...state,
					color_set: 'green',
					color_pending: ''
				}
			}
			else if (pending.includes('orange')) {
				return {
					...state,
					color_set: 'orange',
					color_pending: ''
				}
			}
			else if (pending.includes('purple')) {
				return {
					...state,
					color_set: 'purple',
					color_pending: ''
				}
			}
			else if (pending.includes('black')) {
				return {
					...state,
					color_set: 'black',
					color_pending: ''
				}
			}
			else if (pending.includes('black')) {
				return {
					...state,
					color_set: 'black',
					color_pending: ''
				}
			}
			else if (pending.includes('brown')) {
				return {
					...state,
					color_set: 'brown',
					color_pending: ''
				}
			}
			else if (pending.includes('gray')) {
				return {
					...state,
					color_set: 'gray',
					color_pending: ''
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
