import React from 'react';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';

// import css from './styles.css';
import MenuButton from '../menu-button';

const styles = {
  menu: {
    display: 'flex',
    margin: '1rem 0',
  },
};

const Menu = ({ handleNewGameRequest, preloadPlayers, preloadProgress }) => {
  let preloadInfo = 'Preload Players';
  let disableViewCards = false;
  if (typeof preloadProgress === 'number') {
    preloadInfo = preloadProgress > 0 ? `${preloadProgress} Players Left` : 'Finished Loading Players';
    disableViewCards = preloadProgress > 0;
  }
  return (
    <div>
    <div style={styles.menu}>
      {/* <MenuButton label={'Host Game'} onClick={handleNewGameRequest} />*/}
      <MenuButton
        label={disableViewCards ? 'Please Wait For Cards To Load' : 'View Cards'}
        onClick={() => browserHistory.push('/card-viewer')}
        disabled={disableViewCards}
      />
      <MenuButton
        label={preloadInfo}
        onClick={preloadPlayers}
        disabled={typeof preloadProgress === 'number'}
      />
    </div>
    Warning: Pressing &ldquo;Preload Players&rdquo; will preload about 15 MB of data. If you are accessing this on your phone, consider connecting to Wi-Fi first.
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
