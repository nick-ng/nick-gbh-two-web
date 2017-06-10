import React from 'react';
import PropTypes from 'prop-types';
import contentful from '../../services/contentful';

const styles = {
  cardViewer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  button: {
    margin: '1vh',
    padding: '1vh',
  },
};

const mockCards = ['One', 'Two', 'Three', 'Four', 'Five'];

const CardViewer = ({ currentPlayerName, changeCard }) => (
  <div style={styles.cardViewer}>
    <div>{currentPlayerName ? `Player ${currentPlayerName}` : 'Choose a player'}</div>
    {mockCards.map(playerName => (
      <button
        style={styles.button}
        onClick={() => changeCard(playerName)}
        key={playerName}
      >
        {`Player ${playerName}`}
      </button>
      ))}
  </div>
);

CardViewer.propTypes = {
  currentPlayerName: PropTypes.string.isRequired,
  changeCard: PropTypes.func.isRequired,
};

export default CardViewer;
