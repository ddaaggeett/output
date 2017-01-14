
const initialState = []


export default function blips(state = initialState, action) {
	switch(action.type) {

		//	blip actions handling
		case 'ADD_BLIP': // passing

			return [
				...state, {
					blipID: action.blipID,
					x: action.xPos,
					y: action.yPos,
					text: ''
				}
			]

		case 'EDIT_BLIP':

			var index = 0
			for(var i = 0; i < state.length; i++) {
		        if(state[i].blipID === action.blipID) {
		        	index = i
		        }
		    }

			return [
				...state.slice(0,index),
		        {
		        	...state[index], text: action.text
		        },
		        ...state.slice(index+1)
			]


		default:
			return state
		
	}
}