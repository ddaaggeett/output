import React from 'react';
import { Connector } from 'horizon-react';

import routes from '../routes';
import { Provider } from 'react-redux';
import horizon from '../db';
import { Router, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import configureStore from '../store/configureStore';
const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);

export default () => (
    <Connector horizon={horizon}>
        <Provider store={store}>
            <Router history={history} routes={routes} />
        </Provider>
    </Connector>
);
