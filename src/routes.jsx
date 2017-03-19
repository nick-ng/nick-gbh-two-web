import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import App from './components/app/';
import Menu from './components/menu';

export default function getRouter(store) {
  const history = syncHistoryWithStore(browserHistory, store);

  return (
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Menu} />
      </Route>
    </Router>
  );
}
