// @flow

const initialState = {

	color_pending: '',
    color_set: 'black',
    helpVisible: false

}

export default function design(state = initialState, action:Object) {
	switch (action.type) {
		
		// case 'CHANGE_COLOR': // passing
		// 	return {
		// 		...state,
		// 		color_set: action.new_color
		// 	}


		case 'KEY_PRESSED':

			const some = state.color_pending.concat(action.key).toLowerCase()

			if (some.includes('red')) {
				return {
					...state,
					color_set: 'red',
					color_pending: ''
				}
			}
			else if (some.includes('blue')) {
				return {
					...state,
					color_set: 'blue',
					color_pending: ''
				}
			}
			else if (some.includes('green')) {
				return {
					...state,
					color_set: 'green',
					color_pending: ''
				}
			}
			else if (some.includes('orange')) {
				return {
					...state,
					color_set: 'orange',
					color_pending: ''
				}
			}
			else if (some.includes('black')) {
				return {
					...state,
					color_set: 'black',
					color_pending: ''
				}
			}
			else if (some.includes('black')) {
				return {
					...state,
					color_set: 'black',
					color_pending: ''
				}
			}
			else if (some.includes('brown')) {
				return {
					...state,
					color_set: 'brown',
					color_pending: ''
				}
			}
			
			return {
				...state,
				color_pending: state.color_pending.concat(action.key)
			}

			
		default:
			return state
	}
}