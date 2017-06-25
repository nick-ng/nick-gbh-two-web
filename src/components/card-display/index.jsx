import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';

const styles = {
  cardDisplay: {
    border: 'none',
    background: 'none',
    display: 'flex',
    flexDirection: 'column',
    padding: '0',
  },
  cardImage: {
    flex: '1',
  },
};

const CardDisplay = ({ currentPlayer, flipCard, changeCard, showCardFront }) => {
  const cardSide = showCardFront ? 'cardFront' : 'cardBack';
  return (
    <button
      style={styles.cardDisplay}
      onClick={flipCard}
    >
      {currentPlayer.size > 0 &&
        <img
          style={styles.cardImage}
          alt={currentPlayer.get('fullName')}
          src={currentPlayer.getIn([cardSide, 'url'])}
        />}
    </button>
  );
};

CardDisplay.propTypes = {
  flipCard: PropTypes.func.isRequired,
  currentPlayer: ImmutablePropTypes.map.isRequired,
  showCardFront: PropTypes.bool,
};

CardDisplay.defaultProps = {
  showCardFront: true,
};

export default CardDisplay;