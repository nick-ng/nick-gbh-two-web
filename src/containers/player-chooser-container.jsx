import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';

import PlayerChooser from '../components/player-chooser';

import { getCurrentCard, changeCard } from '../stores/card-display-store';
import { getContent } from '../stores/content-store';

const PlayerChooserContainer = (props) => <PlayerChooser {...props} />;

PlayerChooserContainer.propTypes = {
  currentPlayerName: PropTypes.string,
  allPlayers: ImmutablePropTypes.map,
  allGuilds: ImmutablePropTypes.map,
  changeCard: PropTypes.func.isRequired,
};

PlayerChooserContainer.defaultProps = {
  currentPlayerName: '',
  allPlayers: null,
  allGuilds: null,
};

export default connect(
  (state) => ({
    currentPlayerName: getCurrentCard(state),
    allPlayers: getContent('players')(state),
    allGuilds: getContent('guilds')(state),
  }),
  (dispatch) => ({
    changeCard: (playerName) => dispatch(changeCard(playerName)),
  }),
)(PlayerChooserContainer);
