import { createReducer } from 'redux-immutablejs';
import { createSelector } from 'reselect';
import Immutable from 'immutable';

import { readDataFromUrl } from '../utils';
import asyncStorage from '../interfaces/local-db';

const UPDATE_IMAGE = 'UPDATE_IMAGE';

// Initial State
const initialState = Immutable.fromJS({});

// Selectors
const imageCacheState = (state) => state.imageCacheStore;

export const getImageData = () => createSelector(
  imageCacheState,
  (g) => g.getIn(['currentImage', 'imageData']),
);

export const getImageUrl = () => createSelector(
  imageCacheState,
  (g) => g.getIn(['currentImage', 'imageUrl']),
);

// Actions
export const reFetchImage = (imageUrl) => async (dispatch) => {
  const imageEntry = {
    imageData: await readDataFromUrl(imageUrl),
    dateRetrieved: new Date(),
    imageUrl,
  };
  asyncStorage.setItem(imageUrl, imageEntry);
  dispatch({
    type: UPDATE_IMAGE,
    payload: imageEntry,
  });
};

export const fetchImage = (imageUrl) => async (dispatch, getState) => {
  if (getImageUrl(getState()) !== imageUrl) {
    const imageEntry = await asyncStorage.getItem(imageUrl);
    if (imageEntry) {
      dispatch({
        type: UPDATE_IMAGE,
        payload: imageEntry,
      });
    } else {
      reFetchImage(imageUrl)(dispatch);
    }
  }
};

// Reducers
export default createReducer(initialState, {
  [UPDATE_IMAGE]: (state, action) => state.set('currentImage', Immutable.fromJS(action.payload)),
});
