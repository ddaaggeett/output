// @flow
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import counter from './counter';
import design from './design';

const rootReducer = combineReducers({
  counter,
  design,
  routing
});

export default rootReducer;
