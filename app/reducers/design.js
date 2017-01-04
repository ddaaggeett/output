// @flow

const initialState = {

	color_set: 'black',
	helpVisible: false

}

function design(state = initialState, action) {
	switch (action.type) {
		case 'CHANGE_COLOR':
			return {
				...state,
				color_set: action.new_color
			}
			
		default:
			return state
	}
}

export default design