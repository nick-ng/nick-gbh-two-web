import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import Immutable from 'immutable';
import { connect } from 'react-redux';

import CardDisplay from '../components/card-display';

import { getCurrentPlayer, getShowCardFront, flipCard } from '../stores/card-display-store';

const CardDisplayContainer = (props) => <CardDisplay {...props} />;

CardDisplayContainer.propTypes = {
  flipCard: PropTypes.func.isRequired,
  currentPlayer: ImmutablePropTypes.map,
  showCardFront: PropTypes.bool,
};

CardDisplayContainer.defaultProps = {
  currentPlayer: new Immutable.Map({}),
  showCardFront: true,
};

export default connect(
  (state) => ({
    currentPlayer: getCurrentPlayer(state),
    showCardFront: getShowCardFront(state),
  }),
  (dispatch) => ({
    flipCard: () => dispatch(flipCard()),
  }),
)(CardDisplayContainer);
