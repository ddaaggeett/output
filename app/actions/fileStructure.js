var fs = require('fs')
var path = require('path')


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
		console.log('made '+newName)
		fs.readdir(path.join(state.fileStructure.blooprints,newName), function(err, items) {
			console.log('items in ' + newName + ' = ' + items);

			for (var i=0; i<items.length; i++) {
				console.log(items[i]);
			}
		})
	})


	return {
		type: 'CREATE_BLOOPRINT',
		newName,
		newDir
	}
}
