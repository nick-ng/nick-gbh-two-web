import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';

// import css from './styles.css';
import MenuButton from '../menu-button';

const styles = {
  menu: {
    display: 'flex',
  },
};

const Menu = ({ handleNewGameRequest }) => (
  <div style={styles.menu}>
    <MenuButton label={'Host Game'} onClick={handleNewGameRequest} />
    <MenuButton label={'View Cards'} onClick={() => browserHistory.push('/card-viewer')} />
    <MenuButton label={'Three'} />
  </div>
);

Menu.propTypes = {
  handleNewGameRequest: PropTypes.func.isRequired,
};

export default Menu;
