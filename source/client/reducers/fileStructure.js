var path = require('path')

const initialState = {

    fileWindowVisible: false,
    sketches: './api/sketches/',
    blooprints: './api/blooprints/',
    currentBlooprint: 'open a blooprint',   //  ~/directory/path/
    currentBlooprintPath: '',   //  path.join(blooprints,currentBlooprint)
    image: '',          //  fileName.jpg
    imagePath: '',        //  path.join(currentBlooprintPath,image,'.jpg')

}

export default function fileStructure(state = initialState, action) {
	switch (action.type) {
        case 'SELECT_BLOOPRINT':
            return {
                ...state,
                fileWindowVisible: false,
                currentBlooprint: action.title
            }
        case 'OPEN_FILE_WINDOW':
            return {
                ...state,
                fileWindowVisible: true
            }
        case 'CLOSE_FILE_WINDOW':
            return {
                ...state,
                fileWindowVisible: false
            }
        case 'CREATE_BLOOPRINT':
            return {
                ...state,
                currentBlooprint: action.newName
            }
        default:
            return state
    }
}
