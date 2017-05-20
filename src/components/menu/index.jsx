import React, { PropTypes } from 'react';

import MenuButton from '../menu-button';

const styles = {
  menu: {},
};

const Menu = ({ handleNewGameRequest }) => (
  <div style={styles.menu}>
    <MenuButton label={'Host Game'} onClick={handleNewGameRequest} />
    <MenuButton label={'Two'} />
    <MenuButton label={'Three'} />
  </div>
);

Menu.propTypes = {
  handleNewGameRequest: PropTypes.func.isRequired,
}

export default Menu;
