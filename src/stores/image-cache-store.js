import { createReducer } from 'redux-immutablejs';
import { createSelector } from 'reselect';
import Immutable from 'immutable';

const UPDATE_IMAGE = 'UPDATE_IMAGE';

// Initial State
const initialState = Immutable.fromJS({});

// Selectors
const imageCacheState = (state) => state.imageCacheStore;

export const getImageData = (imageURL) => createSelector(
  imageCacheState,
  (g) => g.get(imageURL),
);

// Actions
export const fetchImage = (imageURL) => (dispatch) => {
  const oReq = new XMLHttpRequest();
  oReq.open('GET', imageURL, true);
  oReq.responseType = 'blob';
  oReq.onload = () => {
    const blob = oReq.response;
    if (blob) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(blob);
      fileReader.onload = () => {
        dispatch({
          type: UPDATE_IMAGE,
          payload: {
            [imageURL]: {
              data: fileReader.result,
              date: new Date(),
            },
          },
        });
      };
    }
  };
  oReq.send();
};

// Reducers
export default createReducer(initialState, {
  [UPDATE_IMAGE]: (state, action) => state.merge(Immutable.fromJS(action.payload)),
});
