import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import App from '../components/app';

import { getGameRoom } from '../stores/game-room-store';

import localDb from '../interfaces/local-db';

export const a = localDb;

const AppContainer = (props) => {
  const { children } = props;
  return (
    <App {...props}>
      {children}
    </App>
  );
};

AppContainer.propTypes = {
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
