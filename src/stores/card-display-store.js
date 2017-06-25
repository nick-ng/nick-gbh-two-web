import { createReducer } from 'redux-immutablejs';
import { createSelector } from 'reselect';
import Immutable from 'immutable';

import { getContent } from './content-store';

// Constants
const CHANGE_CARD = 'CHANGE_CARD';
const FLIP_CARD = 'FLIP_CARD';

// Initial State
const initialState = Immutable.fromJS({
  playerName: '',
  showFront: true,
});

// Selectors
const cardDisplayState = (state) => state.cardDisplayStore;

export const getCurrentCard = createSelector(
  cardDisplayState,
  (c) => c.get('playerName'),
);

export const getCurrentPlayer = createSelector(
  getCurrentCard,
  getContent('players'),
  (playerName, allPlayers) => allPlayers && allPlayers.get(playerName),
);

export const getShowCardFront = createSelector(
  cardDisplayState,
  (c) => c.get('showFront'),
);

// Actions
export const changeCard = (playerName) => (dispatch) => dispatch({
  type: CHANGE_CARD,
  payload: {
    playerName,
    showFront: true,
  },
});

export const flipCard = () => (dispatch, getState) => dispatch({
  type: FLIP_CARD,
  payload: {
    showFront: !getShowCardFront(getState()),
  },
});

// Reducers
export default createReducer(initialState, {
  [CHANGE_CARD]: (state, action) => state.merge(Immutable.fromJS(action.payload)),
  [FLIP_CARD]: (state, action) => state.merge(Immutable.fromJS(action.payload)),
});
