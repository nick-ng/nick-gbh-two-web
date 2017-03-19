import React, { PropTypes } from 'react';

import MenuButton from '../menu-button';

const Menu = () => {
  const styles = {
    menu: {},
  };

  return (
    <div style={styles.menu}>
      <MenuButton label={'One'} />
      <MenuButton label={'Two'} />
      <MenuButton label={'Three'} />
    </div>
  );
};

export default Menu;
