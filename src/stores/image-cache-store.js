import { createReducer } from 'redux-immutablejs';
import { createSelector } from 'reselect';
import Immutable from 'immutable';

import { readBase64FromUrl } from '../utils';
import asyncStorage from '../interfaces/local-db';

const UPDATE_IMAGE = 'UPDATE_IMAGE';

// Initial State
const initialState = Immutable.fromJS({});

// Selectors
const imageCacheState = (state) => state.imageCacheStore;

export const getImageData = (imageUrl) => createSelector(
  imageCacheState,
  (g) => g.getIn([imageUrl, 'imageData']),
);

// Actions
export const reFetchImage = (imageUrl) => async (dispatch) => {
  const imageEntry = {
    imageData: await readBase64FromUrl(imageUrl),
    dateRetrieved: new Date(),
  };
  asyncStorage.setItem(imageUrl, imageEntry);
  dispatch({
    type: UPDATE_IMAGE,
    payload: {
      [imageUrl]: imageEntry,
    },
  });
};

export const fetchImage = (imageUrl) => async (dispatch) => {
  const imageEntry = await asyncStorage.getItem(imageUrl);
  if (imageEntry) {
    dispatch({
      type: UPDATE_IMAGE,
      payload: {
        [imageUrl]: imageEntry,
      },
    });
  } else {
    reFetchImage(imageUrl)(dispatch);
  }
};

// Reducers
export default createReducer(initialState, {
  [UPDATE_IMAGE]: (state, action) => state.merge(Immutable.fromJS(action.payload)),
});
