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
export function createBlooprint(fileStructure,newName) {
	const newDir = path.join(fileStructure.blooprints,newName)
	fs.mkdir(path.join(fileStructure.blooprints,newName), function(){
		fs.readdir(path.join(fileStructure.blooprints,newName), () => {})
	})
	return {
		type: 'CREATE_BLOOPRINT',
		newName,
		newDir
	}
}
