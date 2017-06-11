import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import AppContainer from './containers/app-container';
import MenuContainer from './containers/menu-container';
import CardViewerContainer from './containers/card-viewer-container';

import { getContent, updatePlayers } from './stores/content-store';

const loadContent = ({ getState, dispatch }) => {
  const allPlayers = getContent('players')(getState());
  if (!allPlayers) {
    dispatch(updatePlayers());
  }
};

const getRouter = (store) => {
  const history = syncHistoryWithStore(browserHistory, store);
  return (
    <Router history={history}>
      <Route path="/" component={AppContainer} onEnter={() => loadContent(store)}>
        <IndexRoute component={MenuContainer} />
        <Route path="/card-viewer" component={CardViewerContainer} />
      </Route>
    </Router>
  );
};

export default getRouter;
