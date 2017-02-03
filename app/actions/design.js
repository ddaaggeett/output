//	triggered by keydown
export function keyPressed(key,stamp){
	return {
		type: 'KEY_PRESSED',
		key,
		stamp
	}
}
export function clickCorner(xPos,yPos) {
	return {
		type: 'CLICK_CORNER',
		xPos,
		yPos
	}
}
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
