import React, { PropTypes } from 'react';

const styles = {
  appStyle: {
    color: 'red',
    padding: '5rem 10rem',
    fontSize: '1rem',
  },
  title: {
    color: 'blue',
    padding: '0',
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
