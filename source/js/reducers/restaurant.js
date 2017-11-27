const initialState = {
	atHome: true,
	restaurantInfo: [],
	restaurantHours: [],
	breakfastSpecials: [],
	breakfastItems: [],
	lunchSpecials: [],
	lunchItems: [],
	dinnerSpecials: [],
	dinnerItems: [],
	dessert: []
}

export default function restaurant(state = initialState, action) {
	switch(action.type) {

		case 'SET_SPREADSHEET_DATA':

			return {
                ...state,
                restaurantInfo: action.restaurantInfo,
                restaurantHours: action.restaurantHours,
                breakfastSpecials: action.breakfastSpecials,
                breakfastItems: action.breakfastItems,
                lunchSpecials: action.lunchSpecials,
                lunchItems: action.lunchItems,
                dinnerSpecials: action.dinnerSpecials,
                dinnerItems: action.dinnerItems,
                dessert: action.dessert
            }

		default:
			return state

	}
}
