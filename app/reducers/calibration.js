const initialState = {}

export default function calibration(state = initialState, action) {
    switch (action.type) {

        case 'CLICK_UL':
            var unit_ulx = (action.xPos/action.windowWidth)     //  unit_aax per API
            var unit_uly = (action.yPos/action.windowHeight)    //  unit_aay
            return {
                ...state,
                unit_ulx,
                unit_uly
            }

        case 'CLICK_UR':
            var unit_urx = (action.xPos/action.windowWidth)     //  unit_bbx per API
            var unit_ury = (action.yPos/action.windowHeight)    //  unit_bby
            return {
                ...state,
                unit_urx,
                unit_ury
            }

        case 'CLICK_LL':
            var unit_llx = (action.xPos/action.windowWidth)     //  unit_ccx per API
            var unit_lly = (action.yPos/action.windowHeight)    //  unit_ccy
            return {
                ...state,
                unit_llx,
                unit_lly
            }

        case 'CLICK_LR':
            var unit_lrx = (action.xPos/action.windowWidth)     //  unit_ddx per API
            var unit_lry = (action.yPos/action.windowHeight)    //  unit_ddy
            return {
                ...state,
                unit_lrx,
                unit_lry
            }

        default:
            return state

    }
}
