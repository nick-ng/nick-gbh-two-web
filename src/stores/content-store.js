import { createReducer } from 'redux-immutablejs';
import { createSelector } from 'reselect';
import Immutable from 'immutable';

import getFromContentfulProxy, { getAllPlayers, getAllGuilds } from '../interfaces/contentful';

export const contentList = [
  'players',
  'guilds',
];

// Constants
export const UPDATE_CONTENT = 'UPDATE_CONTENT';

// Initial State
const initialState = Immutable.fromJS({});

// Selectors
const contentState = (state) => state.contentStore;

export const getContent = (contentName) => createSelector(
  contentState,
  (c) => c.get(contentName),
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

// Reducers
export default createReducer(initialState, {
  [UPDATE_CONTENT]: (state, action) => state.merge(Immutable.fromJS(action.payload)),
});
