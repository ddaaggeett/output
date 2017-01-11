//	triggered by keydown
export function keyPressed(key){
	return {
		type: 'KEY_PRESSED',
		key
	}
}
//	triggered by double click on document
export function addBlip(xPos,yPos) {
	return {
		type: 'ADD_BLIP',
		xPos,
		yPos
	}
}