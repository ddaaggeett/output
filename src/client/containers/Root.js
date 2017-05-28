import React from 'react';
import routes from '../routes';
import { Router } from 'react-router';

export default ({ history }) => (
    <Router history={history} routes={routes} />
);
