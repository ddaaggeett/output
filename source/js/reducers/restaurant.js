const initialState = {
	viewHome: true,
	viewBreakfast: false,
	viewLunchDinner: false,
	viewDessert: false,
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

		case 'VIEW_BREAKFAST':
			console.log('reducer working')
			return {
		        ...state,
		        viewBreakfast: true,
		        viewHome: false,
		        viewLunchDinner: false,
		        viewDessert: false
		    }

		case 'VIEW_LUNCH_DINNER':
			return {
		        ...state,
		        viewBreakfast: false,
		        viewHome: false,
		        viewLunchDinner: true,
		        viewDessert: false
		    }

		case 'VIEW_DESSERT':
			return {
		        ...state,
		        viewBreakfast: false,
		        viewHome: false,
		        viewLunchDinner: false,
		        viewDessert: true
		    }

		case 'VIEW_HOME':
			return {
		        ...state,
		        viewBreakfast: false,
		        viewHome: true,
		        viewLunchDinner: false,
		        viewDessert: false
		    }


		default:
			return state

	}
}
