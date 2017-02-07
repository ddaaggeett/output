import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { hashHistory } from 'react-router';
import { routerMiddleware, push } from 'react-router-redux';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';

import { persistStore, autoRehydrate } from 'redux-persist'
import localForage from 'localforage'

import * as designActions from '../actions/design';
import * as blipActions from '../actions/blips';
import * as calibrationActions from '../actions/calibration';
import * as fileActions from '../actions/fileStructure';

const actionCreators = {
  ...designActions,
  ...blipActions,
  ...calibrationActions,
  ...fileActions,
  push,
};

const logger = createLogger({
  level: 'info',
  collapsed: true
});

const router = routerMiddleware(hashHistory);

// If Redux DevTools Extension is installed use it, otherwise use Redux compose
/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Options: http://zalmoxisus.github.io/redux-devtools-extension/API/Arguments.html
    actionCreators,
  }) :
  compose;
/* eslint-enable no-underscore-dangle */
const enhancer = composeEnhancers(
    applyMiddleware(thunk, router, logger),
    autoRehydrate()
);

export default function configureStore(initialState: Object | void) {
    const store = createStore(rootReducer, initialState, enhancer);
    /*
    TODO:
    run 1x with purge() if redux-persist needs a clearing
    */
    // persistStore(store, {storage: localForage})
    persistStore(store, {storage: localForage}).purge()

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers')) // eslint-disable-line global-require
    );
  }

  return store;
}
