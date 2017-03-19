import React, { PropTypes } from 'react';

const MenuButton = ({
  onClick,
  label,
}) => {
  const styles = {
    button: {
      fontSize: '5vmin',
      minWidth: '24vmin',
      minHeight: '24vmin',
      margin: '1vmin',
    },
  };

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
  onClick: PropTypes.function,
  label: PropTypes.string,
};

MenuButton.defaultProps = {
  onClick: () => {},
  label: 'OK',
};
