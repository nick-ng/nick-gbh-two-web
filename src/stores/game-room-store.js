import { createReducer } from 'redux-immutablejs';
import { createSelector } from 'reselect';
import Immutable from 'immutable';

import constants from './constants';

import gameRoom from '../services/game-room';

// Constants
const {
    UPDATE_ROOM_ID,
} = constants;

// Initial State
const initialState = Immutable.fromJS({
  gameId: null,
});

// Selectors
const gameRoomState = state => state.gameRoomStore;

export const getGameRoom = createSelector(
  gameRoomState,
  g => g.get('gameRoom'),
);

// Actions
export function getNewGameRoom(coachId = null) {
  return (dispatch) => {
    gameRoom.hostGame(coachId)
      .then((res) => {
        dispatch({
          type: UPDATE_ROOM_ID,
          payload: {
            gameId: res.gameId,
            coachId: res.coachId,
          },
        });
        return res;
      });
  };
}

// Reducers
export default createReducer(initialState, {
  [UPDATE_ROOM_ID]: (state, action) => {
    console.log('Updating room information', action.payload);
    state.set('gameId', action.payload.gameId);
  },
});
