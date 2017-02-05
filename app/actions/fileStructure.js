var fs = require('fs')
var path = require('path')


export function selectBlooprint(fileStructure,title) {
	return {
		type: 'SELECT_BLOOPRINT',
		fileStructure,
		title
	}
}
export function openFileWindow() {
	return {
		type: 'OPEN_FILE_WINDOW'
	}
}
export function closeFileWindow() {
	return {
		type: 'CLOSE_FILE_WINDOW'
	}
}
export function openBlooprint(name) {
	return {
		type: 'OPEN_BLOOPRINT',
		name
	}
}
export function createBlooprint(state,newName) {
	const newDir = path.join(state.fileStructure.blooprints,newName)
	fs.mkdir(path.join(state.fileStructure.blooprints,newName), function(){
		fs.readdir(path.join(state.fileStructure.blooprints,newName), () => {})
	})
	return {
		type: 'CREATE_BLOOPRINT',
		newName,
		newDir
	}
}
