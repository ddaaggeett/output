import capture from '../../api/capture'

const initialState = {

	color_pending: '',
    color_set: 'black',
    helpVisible: false,
    titleBlockVisible: false,
    action_pending: 'bloop',
	image: ''
}

export default function design(state = initialState, action) {
	switch (action.type) {

		case 'KEY_PRESSED':

			const pending = state.color_pending.concat(action.key).toLowerCase()

			//	trigger action_pending
			if (pending.includes('control ')) {
				if((state.action_pending === 'bloop')||(state.action_pending === 'blip')||(state.action_pending === 'erase')||(state.action_pending === 'calibrate')){

					///////////////////////////////////////////////
					///////////////////////////////////////////////
					// camera capture trigger
					console.log('triggering camera @ ',action.stamp)
					capture(action.stamp)
					///////////////////////////////////////////////
					///////////////////////////////////////////////

					return {
						...state,
						color_pending: '',
						action_pending: 'bloop',
						image: '../api/camera/' + action.stamp + '.jpg'
					}
				}
			}

			//	set action_pending
			if (pending.includes('1')) {
				return {
					...state,
					action_pending: 'bloop'
				}
			}
			else if (pending.includes('2')) {
				return {
					...state,
					action_pending: 'blip'
				}
			}
			else if (pending.includes('3')) {
				return {
					...state,
					action_pending: 'erase'
				}
			}
			else if (pending.includes('4')) {
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
