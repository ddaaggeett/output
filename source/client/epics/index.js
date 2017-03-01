import { combineEpics } from 'redux-observable'

import designSettings from './designSettings'

const epics = [...designSettings]

export default combineEpics(...epics)
