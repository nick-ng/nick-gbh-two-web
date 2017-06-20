import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';

import CardViewer from '../components/card-viewer';

import { getCurrentCard, changeCard } from '../stores/card-display-store';
import { getContent } from '../stores/content-store';

const CardViewerContainer = (props) => <CardViewer {...props} />;

CardViewerContainer.propTypes = {
  currentPlayerName: PropTypes.string,
  allPlayers: ImmutablePropTypes.map,
  changeCard: PropTypes.func.isRequired,
};

CardViewerContainer.defaultProps = {
  currentPlayerName: '',
  allPlayers: null,
};

export default connect(
  (state) => ({
    currentPlayerName: getCurrentCard(state),
    allPlayers: getContent('players')(state),
  }),
  (dispatch) => ({
    changeCard: (playerName) => dispatch(changeCard(playerName)),
  }),
)(CardViewerContainer);
