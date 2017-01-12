// @flow
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import design from './design';
import blips from './blips';

const rootReducer = combineReducers({
  design,
  blips,
  routing
});

export default rootReducer;
