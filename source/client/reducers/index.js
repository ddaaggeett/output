import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import design from './design';
import blips from './blips';
import calibration from './calibration';
import fileStructure from './fileStructure';

const rootReducer = combineReducers({
  design,
  blips,
  calibration,
  fileStructure,
  routing
});

export default rootReducer;
