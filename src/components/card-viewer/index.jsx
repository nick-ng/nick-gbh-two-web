import React from 'react';

import PlayerChooserContainer from '../../containers/player-chooser-container';
import CardDisplayContainer from '../../containers/card-display-container';

const styles = {
  cardViewer: {
    flex: '1',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
};

const CardViewer = () => (
  <div style={styles.cardViewer}>
    <PlayerChooserContainer />
    <CardDisplayContainer />
  </div>
);

export default CardViewer;
