import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import CardViewer from './components/card-viewer';

import AppContainer from './containers/app-container';
import MenuContainer from './containers/menu-container';

import { getContent, updateContent, contentList } from './stores/content-store';

const loadContent = ({ getState, dispatch }) => {
  const state = getState();
  contentList.forEach((contentName) => {
    if (!getContent(contentName)(state)) {
      dispatch(updateContent(contentName));
    }
  });
};

const getRouter = (store) => {
  const history = syncHistoryWithStore(browserHistory, store);
  return (
    <Router history={history}>
      <Route path="/" component={AppContainer} onEnter={() => loadContent(store)}>
        <IndexRoute component={MenuContainer} />
        <Route path="/card-viewer" component={CardViewer} onEnter={() => loadContent(store)} />
      </Route>
    </Router>
  );
};

export default getRouter;
