import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Menu from '../components/menu';

import { getGameRoom, getNewGameRoom } from '../stores/game-room-store';
import { fetchImage } from '../stores/image-cache-store';

const MenuContainer = ({ gameId, handleNewGameRequest, loadImage }) => (
  <Menu
    gameId={gameId}
    handleNewGameRequest={handleNewGameRequest}
    loadImage={loadImage}
  />
);

MenuContainer.propTypes = {
  gameId: PropTypes.string,
  handleNewGameRequest: PropTypes.func.isRequired,
  loadImage: PropTypes.func.isRequired,
};

MenuContainer.defaultProps = {
  gameId: '',
};

export default connect(
  (state) => ({
    gameId: getGameRoom(state),
  }),
  (dispatch) => ({
    handleNewGameRequest: (coachId) => dispatch(getNewGameRoom(coachId)),
    loadImage: (imageURL) => dispatch(fetchImage(imageURL)),
  }),
)(MenuContainer);
