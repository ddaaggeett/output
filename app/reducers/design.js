// @flow

const initialState = {

	color_set: 'black',
	helpVisible: false

}

export default function design(state = initialState, action) {
	switch (action.type) {
		case 'CHANGE_COLOR':
			console.log('inside reducer - color = ', action.new_color)
			return {
				...state,
				color_set: action.new_color
			}
			
		default:
			return state
	}
}