import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import gameRoomStore from './game-room-store';
import cardDisplayStore from './card-display-store';

export default combineReducers({
  routing,
  gameRoomStore,
  cardDisplayStore,
});
