import { createReducer } from 'redux-immutablejs';
import { createSelector } from 'reselect';
import Immutable from 'immutable';

import { readBase64FromUrl } from '../utils';

const UPDATE_IMAGE = 'UPDATE_IMAGE';

// Initial State
const initialState = Immutable.fromJS({});

// Selectors
const imageCacheState = (state) => state.imageCacheStore;

export const getImageData = (imageUrl) => createSelector(
  imageCacheState,
  (g) => g.getIn([imageUrl, 'data']),
);

// Actions
export const fetchImage = (imageUrl) => async (dispatch) => {
  const data = await readBase64FromUrl(imageUrl);
  dispatch({
    type: UPDATE_IMAGE,
    payload: {
      [imageUrl]: {
        data,
        date: new Date(),
      },
    },
  });
};

// Reducers
export default createReducer(initialState, {
  [UPDATE_IMAGE]: (state, action) => state.merge(Immutable.fromJS(action.payload)),
});
