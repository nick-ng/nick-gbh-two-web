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
const gameRoomState = (state) => state.gameRoomStore;

export const getGameRoom = createSelector(
  gameRoomState,
  (g) => g.get('gameId'),
);

// Actions
export function getNewGameRoom() {
  const coachId = 'hello';
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
      });
  };
}

// Reducers
export default createReducer(initialState, {
  [UPDATE_ROOM_ID]: (state, action) => state.set('gameId', action.payload.gameId),
});
