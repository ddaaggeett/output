import horizon from '../db'
const designSettings = horizon('designSettings')

export function finishCalibration() {
    return {
        type: 'FINISH_CALIBRATION'
    }
}
export function closeHelp() {
	return {
		type: 'CLOSE_HELP'
	}
}
function setMarker(markerColor) {
	return {
		type: 'SET_MARKER_COLOR',
		markerColor
	}
}
//  ASYNC - thunk
export const setMarkerColor = (markerColor) => {
    designSettings.upsert({
        id:0,
        markerColor: markerColor
    })
    return (dispatch) => dispatch(setMarker(markerColor))
}
function setBloop(bloopAction) {
	return {
		type: 'SET_BLOOP_ACTION',
		bloopAction
	}
}
//  ASYNC - thunk
export const setBloopAction = (bloopAction) => {
    designSettings.upsert({
        id: 0,
        bloopAction: bloopAction
    })
    return (dispatch) => dispatch(setBloop(bloopAction))
}
export function triggerBloop(bloopAction,stampTime) {
	return {
		type: 'TRIGGER_BLOOP',
		bloopAction,
		stampTime
	}
}
export function toggleHelp() {
	return {
		type: 'TOGGLE_HELP'
	}
}
export function toggleTitleBlock() {
	return {
		type: 'TOGGLE_TITLE_BLOCK'
	}
}
export function prepForInputImage() {
    return {
        type: 'PREP_FOR_INPUT_IMAGE'
    }
}
