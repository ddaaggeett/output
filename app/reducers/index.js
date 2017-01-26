import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import design from './design';
import blips from './blips';
import calibration from './calibration';

const rootReducer = combineReducers({
  design,
  blips,
  calibration,
  routing
});

export default rootReducer;
