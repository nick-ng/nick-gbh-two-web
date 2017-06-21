import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import App from '../components/app';

import { getGameRoom } from '../stores/game-room-store';

const AppContainer = ({ gameId, children }) => (
  <App
    gameId={gameId}
  >
    {children}
  </App>
);

AppContainer.propTypes = {
  gameId: PropTypes.string,
  children: PropTypes.node,
};

AppContainer.defaultProps = {
  gameId: null,
  children: null,
};

export default connect(
  (state) => ({
    gameId: getGameRoom(state),
  }),
  () => ({}),
)(AppContainer);
