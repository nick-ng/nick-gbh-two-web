import React, { PropTypes } from 'react';

import MenuButton from '../menu-button';

import gameRoom from '../../services/game-room';

const styles = {
  menu: {},
};

console.log('hostGame', gameRoom);

const Menu = () => (
  <div style={styles.menu}>
    <MenuButton label={'Host Game'} onClick={gameRoom.hostGame} />
    <MenuButton label={'Two'} />
    <MenuButton label={'Three'} />
  </div>
);

export default Menu;
