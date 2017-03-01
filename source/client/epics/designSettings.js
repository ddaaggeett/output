import Rx, { Observable } from 'rxjs'
import { designSettings } from '../db'
// import 'rxjs/add/operator/catch'

const setBloopAction = (action$) => {

    console.log('inside epic')
    return (
        action$
        .ofType('SET_BLOOP_ACTION')
        .mergeMap(action =>
            designSettings
            // .store(action.bloopAction)
            .upsert({
                id: 0,
                bloopAction: action.bloopAction
            })
            // .catch(error => Observable.of({ type: 'SET_BLOOP_ACTION', error }))
        )
    )
}

const setMarkerColor = (action$) => {
    return (
        action$
        .ofType('SET_MARKER_COLOR')
        .mergeMap(action =>
            designSettings
            .upsert({
                id: 0,
                color_set: action.markerColor
            })
        )
    )
}


export default [setBloopAction, setMarkerColor]


/* turn all these into epics */

// export function finishCalibration() {
//     return {
//         type: 'FINISH_CALIBRATION'
//     }
// }
// export function closeHelp() {
// 	return {
// 		type: 'CLOSE_HELP'
// 	}
// }
//
// export function triggerBloop(bloopAction,stampTime) {
// 	return {
// 		type: 'TRIGGER_BLOOP',
// 		bloopAction,
// 		stampTime
// 	}
// }
// export function toggleHelp() {
// 	return {
// 		type: 'TOGGLE_HELP'
// 	}
// }
// export function toggleTitleBlock() {
// 	return {
// 		type: 'TOGGLE_TITLE_BLOCK'
// 	}
// }
