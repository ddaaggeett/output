import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Root from './containers/Root';

import { Connector } from 'horizon-react';
import { Provider } from 'react-redux';
import horizon from './db';
import { hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import configureStore from './store/configureStore';
const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);

// Define the target container for our application
const rootElement = document.getElementById('root');

// Accept HMR
if (module.hot) {
  module.hot.accept();
}

// Render application to target container
ReactDOM.render(
    <AppContainer>
        <Connector horizon={horizon}>
            <Provider store={store}>
                <Root {...history} />
            </Provider>
        </Connector>
    </AppContainer>,
    rootElement
);

// react-hot-loader 3 specific - rerender AppContainer
// in case of problems with react-router, check this issue:
// https://github.com/gaearon/react-hot-loader/issues/249
if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    const RootEle = require('./containers/Root').default; // eslint-disable-line
    ReactDOM.render(
      <AppContainer>
          <Connector horizon={horizon}>
              <Provider store={store}>
                  <RootEle {...history} />
              </Provider>
          </Connector>
      </AppContainer>,
      rootElement
    );
  });
}
