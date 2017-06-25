import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  appStyle: {
    padding: '1rem',
    fontSize: '1rem',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  title: {
    padding: '0',
    margin: '1vh 0',
    fontSize: '5h',
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
