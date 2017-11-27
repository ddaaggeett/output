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
