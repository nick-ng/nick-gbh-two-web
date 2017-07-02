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

const Menu = ({ handleNewGameRequest, loadImage }) => (
  <div style={styles.menu}>
    <MenuButton label={'Host Game'} onClick={handleNewGameRequest} />
    <MenuButton label={'View Cards'} onClick={() => browserHistory.push('/card-viewer')} />
    <MenuButton label={'Three'} onClick={() => loadImage('http://images.contentful.com/tbkgo5grem8y/OSAz46AIEwwow8cu8MEs8/ac9715828b879d03b1a7678ebcd837f3/harry_f.jpg')} />
  </div>
);

Menu.propTypes = {
  handleNewGameRequest: PropTypes.func.isRequired,
  loadImage: PropTypes.func.isRequired,
};

export default Menu;
