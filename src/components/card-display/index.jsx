import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';

import ImageContainer from '../../containers/image-container';

const styles = {
  cardDisplay: {
    border: 'none',
    background: 'none',
    display: 'flex',
    flexDirection: 'column',
    padding: '0',
    flex: '0 1 auto',
  },
  cardImage: {
    flex: '1',
    maxWidth: '100%',
    maxHeight: '100vh',
  },
};

const CardDisplay = ({ currentPlayer, flipCard, changeCard, showCardFront }) => { // eslint-disable-line
  const cardSide = showCardFront ? 'cardFront' : 'cardBack';
  const cardUrl = currentPlayer.size > 0 ? `https:${currentPlayer.getIn([cardSide, 'url'])}` : '/images/512.png';
  return (
    <button
      style={styles.cardDisplay}
      onClick={flipCard}
    >
      <ImageContainer
        style={styles.cardImage}
        alt={currentPlayer.get('fullName') || 'Nick\'s Guildball Health Tracker'}
        src={cardUrl}
      />
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
