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
export function viewBreakfastMenu() {
    return {
        type: 'VIEW_BREAKFAST'
    }
}
export function viewLunchDinnerMenu() {
    return {
        type: 'VIEW_LUNCH_DINNER'
    }
}
export function viewDessertMenu() {
    return {
        type: 'VIEW_DESSERT'
    }
}
export function viewHomeMenu() {
    return {
        type: 'VIEW_HOME'
    }
}
