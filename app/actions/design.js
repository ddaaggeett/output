export function changeColor(new_color) {
	return {
		type: 'CHANGE_COLOR',
		new_color
	}
}
export function keyPressed(key){
	return {
		type: 'KEY_PRESSED',
		key
	}
}