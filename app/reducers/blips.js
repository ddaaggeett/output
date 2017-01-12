
const initialState = []


export default function blips(state = initialState, action) {
	switch(action.type) {

		//	blip actions handling
		case 'ADD_BLIP': // passing

			return [
				...state, {
					blipId: action.blipId,
					x: action.xPos,
					y: action.yPos,
					text: ''
				}
			]

		default:
			return state
		
	}
}