// eslint-disable
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

const Menu = ({ handleNewGameRequest }) => { // eslint-disable-line
  return (
    <div>
      <div style={styles.menu}>
        {/* <MenuButton label={'Host Game'} onClick={handleNewGameRequest} />*/}
        <MenuButton
          label={'View Cards'}
          onClick={() => browserHistory.push('/card-viewer')}
        />
      </div>
    </div>
  );
};

Menu.propTypes = {
  handleNewGameRequest: PropTypes.func.isRequired,
};

Menu.defaultProps = {
  preloadProgress: null,
};

export default Menu;
