export function changeColor(new_color) {
  return {
    type: 'CHANGE_COLOR',
    new_color
  }
}
export function addBlip(x,y){
	type: 'ADD_BLIP',
	x,
	y
}