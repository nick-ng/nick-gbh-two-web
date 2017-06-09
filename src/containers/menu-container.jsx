import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Menu from '../components/menu';

import { getGameRoom, getNewGameRoom } from '../stores/game-room-store';

const MenuContainer = ({ gameId, handleNewGameRequest }) => (
  <Menu
    gameId={gameId}
    handleNewGameRequest={handleNewGameRequest}
  />
);

MenuContainer.propTypes = {
  gameId: PropTypes.string,
  handleNewGameRequest: PropTypes.func.isRequired,
};

MenuContainer.defaultProps = {
  gameId: '',
};

export default connect(
  state => ({
    gameId: getGameRoom(state),
  }),
  dispatch => ({
    handleNewGameRequest: coachId => dispatch(getNewGameRoom(coachId)),
  }),
)(MenuContainer);
