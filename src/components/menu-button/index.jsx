import React, { PropTypes } from 'react';

const styles = {
  button: {
    fontSize: '5vmin',
    width: '24vmin',
    height: '24vmin',
    margin: '1vmin',
  },
};

const MenuButton = (props) => {
  const {
    onClick,
    label,
  } = props;

  return (
    <button
      onClick={onClick}
      style={styles.button}
    >
      {label}
    </button>
  );
};

export default MenuButton;

MenuButton.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string,
};

MenuButton.defaultProps = {
  onClick: () => {},
  label: 'OK',
};
