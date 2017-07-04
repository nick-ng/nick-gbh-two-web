import React from 'react';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';

// import css from './styles.css';
import MenuButton from '../menu-button';

const styles = {
  menu: {
    display: 'flex',
  },
};

const Menu = ({ handleNewGameRequest, preloadPlayers, preloadProgress }) => {
  let preloadInfo = 'Preload Players';
  if (typeof preloadProgress === 'number') {
    preloadInfo = preloadProgress > 0 ? `${preloadProgress} Players Left` : 'Finished Loading Players';
  }
  return (
    <div style={styles.menu}>
      <MenuButton label={'Host Game'} onClick={handleNewGameRequest} />
      <MenuButton label={'View Cards'} onClick={() => browserHistory.push('/card-viewer')} />
      <MenuButton label={preloadInfo} onClick={preloadPlayers} disabled={typeof preloadProgress === 'number'} />
    </div>
  );
};

Menu.propTypes = {
  handleNewGameRequest: PropTypes.func.isRequired,
  preloadPlayers: PropTypes.func.isRequired,
  preloadProgress: PropTypes.number,
};

Menu.defaultProps = {
  preloadProgress: null,
};

export default Menu;
