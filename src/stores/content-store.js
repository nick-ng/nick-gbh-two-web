import { createReducer } from 'redux-immutablejs';
import { createSelector } from 'reselect';
import Immutable from 'immutable';

import { getAllPlayers } from '../services/contentful';
import constants from './constants';

// Constants
const {
    UPDATE_CONTENT,
} = constants;

// Initial State
const initialState = Immutable.fromJS({
  players: null,
  guilds: null,
});

// Selectors
const contentState = state => state.contentStore;

export const getContent = contentName => createSelector(
  contentState,
  c => c.get(contentName),
);

// Actions
export const updatePlayers = () => async (dispatch) => {
  const players = Immutable.fromJS(await getAllPlayers());
  dispatch({
    type: UPDATE_CONTENT,
    payload: {
      players,
    },
  });
};

// Reducers
export default createReducer(initialState, {
  [UPDATE_CONTENT]: (state, action) => state.merge(Immutable.fromJS(action.payload)),
});
