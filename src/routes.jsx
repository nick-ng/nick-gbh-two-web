import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import AppContainer from './containers/app-container';
import MenuContainer from './containers/menu-container';

export default function getRouter(store) {
  const history = syncHistoryWithStore(browserHistory, store);

  return (
    <Router history={history}>
      <Route path="/" component={AppContainer}>
        <IndexRoute component={MenuContainer} />
      </Route>
    </Router>
  );
}
