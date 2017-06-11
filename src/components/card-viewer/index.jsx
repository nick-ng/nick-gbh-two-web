import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';

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

const CardViewer = ({ currentPlayerName, changeCard, allPlayers }) => (
  <div style={styles.cardViewer}>
    <div>{currentPlayerName ? allPlayers.get(currentPlayerName).get('fullName') : 'Choose a player'}</div>
    <div style={styles.playerList}>
      {allPlayers && allPlayers.toList().map(player => (
        <button
          style={styles.button}
          onClick={() => changeCard(player.get('name'))}
          key={player.get('name')}
        >
          {player.get('shortName')}
        </button>
        ))}
    </div>
  </div>
);

CardViewer.propTypes = {
  currentPlayerName: PropTypes.string.isRequired,
  changeCard: PropTypes.func.isRequired,
  allPlayers: ImmutablePropTypes.map,
};

CardViewer.defaultProps = {
  allPlayers: null,
};

export default CardViewer;
