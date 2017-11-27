export function setSpreadsheetData(restaurantInfo, restaurantHours, breakfastSpecials, breakfastItems, lunchSpecials, lunchItems, dinnerSpecials, dinnerItems,dessert) {
    return {
        type: 'SET_SPREADSHEET_DATA',
        restaurantInfo,
        restaurantHours,
        breakfastSpecials,
        breakfastItems,
        lunchSpecials,
        lunchItems,
        dinnerSpecials,
        dinnerItems,
        dessert
    }
}
export function viewBreakfast() {
    return {
        type: 'VIEW_BREAKFAST'
    }
}
export function viewLunchDinner() {
    return {
        type: 'VIEW_LUNCH_DINNER'
    }
}
export function viewDessert() {
    return {
        type: 'VIEW_DESSERT'
    }
}
export function viewHome() {
    return {
        type: 'VIEW_HOME'
    }
}
