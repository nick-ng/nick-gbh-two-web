import { createReducer } from 'redux-immutablejs';
import { createSelector } from 'reselect';
import Immutable from 'immutable';

import constants from './constants';

// Constants
const {
    CHANGE_CARD,
    FLIP_CARD,
} = constants;

// Initial State
const initialState = Immutable.fromJS({
  playerName: '',
  showFront: true,
});

// Selectors
const cardDisplayState = state => state.cardDisplayStore;

export const getCurrentCard = createSelector(
  cardDisplayState,
  c => c.get('playerName'),
);

export const showCardFront = createSelector(
  cardDisplayState,
  c => c.get('showFront'),
);

// Actions
export const changeCard = playerName => dispatch => dispatch({
  type: CHANGE_CARD,
  payload: {
    playerName,
    showFront: true,
  },
});

export const flipCard = () => (dispatch, getState) => dispatch({
  type: FLIP_CARD,
  payload: {
    showFront: !showCardFront(getState),
  },
});

// Reducers
export default createReducer(initialState, {
  [CHANGE_CARD]: (state, action) => state.merge(Immutable.fromJS(action.payload)),
  [FLIP_CARD]: (state, action) => state.merge(Immutable.fromJS(action.payload)),
});
