import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import gameRoomStore from './game-room-store';
import cardDisplayStore from './card-display-store';
import contentStore from './content-store';
import imageCacheStore from './image-cache-store';

export default combineReducers({
  routing,
  gameRoomStore,
  cardDisplayStore,
  contentStore,
  imageCacheStore,
});
