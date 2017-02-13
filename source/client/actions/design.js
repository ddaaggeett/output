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
export function setMarkerColor(markerColor) {
	return {
		type: 'SET_MARKER_COLOR',
		markerColor
	}
}
export function setBloopAction(bloopAction) {
	return {
		type: 'SET_BLOOP_ACTION',
		bloopAction
	}
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
