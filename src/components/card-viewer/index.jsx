import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';

import PlayerChooserContainer from '../../containers/player-chooser-container';

const styles = {
  cardViewer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  playerList: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  button: {
    fontSize: '3vmin',
    margin: '0.3vh',
    padding: '2vh',
  },
};

const CardViewer = ({ currentPlayerName, allPlayers }) => (
  <div style={styles.cardViewer}>
    <h2>{currentPlayerName ? allPlayers.get(currentPlayerName).get('fullName') : 'Choose a player'}</h2>
    <PlayerChooserContainer />
  </div>
);

CardViewer.propTypes = {
  currentPlayerName: PropTypes.string.isRequired,
  allPlayers: ImmutablePropTypes.map,
};

CardViewer.defaultProps = {
  allPlayers: null,
};

export default CardViewer;
