import { createReducer } from 'redux-immutablejs';
import { createSelector } from 'reselect';
import Immutable from 'immutable';
import pRetry from 'p-retry';

import getFromContentfulProxy, { getAllPlayers, getAllGuilds } from '../interfaces/contentful';
import { reFetchImage } from './image-cache-store';
import { changeCard } from './card-display-store';

export const contentList = [
  'players',
  'guilds',
];

// Constants
export const UPDATE_CONTENT = 'UPDATE_CONTENT';
export const UPDATE_PRELOAD_COUNTER = 'UPDATE_PRELOAD_COUNTER';

// Initial State
const initialState = Immutable.fromJS({
  preloadProgress: null,
});

// Selectors
const contentState = (state) => state.contentStore;

export const getPreloadProgress = (state) => contentState(state).get('preloadProgress');

export const getContent = (contentName) => createSelector(
  contentState,
  (c) => c.get(contentName) && c.get(contentName).sort((a, b) => a.get('name').localeCompare(b.get('name'))),
);

// Actions
export const updateContent = (contentName) => async (dispatch) => dispatch({
  type: UPDATE_CONTENT,
  payload: {
    [contentName]: Immutable.fromJS(await getFromContentfulProxy(contentName)),
  },
});

export const updatePlayers = () => async (dispatch) => {
  const players = Immutable.fromJS(await getAllPlayers());
  dispatch({
    type: UPDATE_CONTENT,
    payload: {
      players,
    },
  });
};

export const updateGuilds = () => async (dispatch) => {
  const guilds = Immutable.fromJS(await getAllGuilds());
  dispatch({
    type: UPDATE_CONTENT,
    payload: {
      guilds,
    },
  });
};

export const preloadPlayerImages = async (dispatch, getState) => {
  const options = { retries: 99 };
  const players = getContent('players')(getState());
  if (players) {
    let remainingPlayers = players.size;
    await dispatch({
      type: UPDATE_PRELOAD_COUNTER,
      payload: remainingPlayers,
    });
    await Promise.all(players.map(async (player) => {
      const frontUrl = player.getIn(['cardFront', 'url']);
      const backUrl = player.getIn(['cardBack', 'url']);
      await pRetry(reFetchImage(frontUrl)(dispatch), options);
      await pRetry(reFetchImage(backUrl)(dispatch), options);
      remainingPlayers -= 1;
      dispatch({
        type: UPDATE_PRELOAD_COUNTER,
        payload: remainingPlayers,
      });
    }));
    changeCard(null)(dispatch);
  }
};

// Reducers
export default createReducer(initialState, {
  [UPDATE_CONTENT]: (state, action) => state.merge(Immutable.fromJS(action.payload)),
  [UPDATE_PRELOAD_COUNTER]: (state, action) => state.set('preloadProgress', action.payload),
});
