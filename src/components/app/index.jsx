import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  appStyle: {
    padding: '0',
    fontSize: '1rem',
  },
  title: {
    padding: '0',
    margin: '1vh 0',
    fontSize: '10vh',
  },
};

export default function App({ gameId, children }) {
  const text = gameId ? `Game: ${gameId}` : 'Test';
  return (
    <div style={styles.appStyle}>
      <h1 style={styles.title}>{text}</h1>
      <div>{children}</div>
    </div>
  );
}

App.propTypes = {
  gameId: PropTypes.string,
  children: PropTypes.node,
};

App.defaultProps = {
  gameId: null,
  children: null,
};
