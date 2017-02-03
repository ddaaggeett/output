const initialState = {

    fileWindowVisible: false,
    blooprints: './api/blooprints/',
    currentBlooprintPath: '',   //  ~/directory/path/
    currentBlooprint: 'blooprint',   //  ~/directory/path/
    image: '',          //  fileName.jpg
    display: '',        //  currentBlooprintPath.concat(image)

}

export default function fileStructure(state = initialState, action) {
	switch (action.type) {
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
        case 'OPEN_BLOOPRINT':
            return {
                ...state,
                display: action.name
            }
        case 'CREATE_BLOOPRINT':
            return {
                ...state,
                currentBlooprintPath: action.newDir,
                currentBlooprint: action.newName
            }
        default:
            return state
    }
}
