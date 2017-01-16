//	triggered by keydown
export function keyPressed(key,stamp){
	return {
		type: 'KEY_PRESSED',
		key,
		stamp
	}
}
