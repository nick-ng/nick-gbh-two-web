import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CardViewer from '../components/card-viewer';

import { getCurrentCard, changeCard } from '../stores/card-display-store';

const CardViewerContainer = props => <CardViewer {...props} />;

CardViewerContainer.propTypes = {
  currentPlayerName: PropTypes.string,
  changeCard: PropTypes.func.isRequired,
};

CardViewerContainer.defaultProps = {
  currentPlayerName: '',
};

export default connect(
  state => ({
    currentPlayerName: getCurrentCard(state),
  }),
  dispatch => ({
    changeCard: playerName => dispatch(changeCard(playerName)),
  }),
)(CardViewerContainer);
