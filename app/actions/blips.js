export function addBlip(blipId,xPos,yPos) {
	return {
		type: 'ADD_BLIP',
		blipId,
		xPos,
		yPos
	}
}
export function openBlip(blipId) {
	return {
		type: 'OPEN_BLIP',
		blipId
	}
}
export function editBlip(blipId,text) {
	return {
		type: 'EDIT_BLIP',
		blipId,
		text
	}
}