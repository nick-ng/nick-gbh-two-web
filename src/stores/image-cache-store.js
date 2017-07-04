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
export const fetchImage = (imageUrl) => async (dispatch) => {
  let imageData;
  let dateRetrieved;
  const imageEntry = await asyncStorage.getItem(imageUrl);
  if (imageEntry) {
    imageData = imageEntry.imageData;
    dateRetrieved = imageEntry.dateRetrieved;
  } else {
    imageData = await readBase64FromUrl(imageUrl);
    dateRetrieved = new Date();
    asyncStorage.setItem(imageUrl, { imageData, dateRetrieved });
  }
  dispatch({
    type: UPDATE_IMAGE,
    payload: {
      [imageUrl]: {
        imageData,
        dateRetrieved,
      },
    },
  });
};

// Reducers
export default createReducer(initialState, {
  [UPDATE_IMAGE]: (state, action) => state.merge(Immutable.fromJS(action.payload)),
});
