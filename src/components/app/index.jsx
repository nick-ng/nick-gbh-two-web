import React from 'react';
import { IndexLink } from 'react-router';
import PropTypes from 'prop-types';

const styles = {
  appStyle: {
    margin: '0 1rem',
    fontSize: '1rem',
    display: 'flex',
    flexDirection: 'row',
    height: '100vh',
  },
  title: {
    padding: '0',
    margin: '1vh 0',
    fontSize: '5h',
  },
  content: {
    flex: '1 1 0',
    display: 'flex',
  },
  homeButton: {
    display: 'block',
    transform: 'rotate(270deg)',
    transformOrigin: 'bottom',
    fontSize: '3vmin',
    marginTop: '1rem',
  },
  activeHomeButton: {
    display: 'none',
  }
};

export default function App(props) {
  const { children } = props;
  return (
    <div style={styles.appStyle}>
      <div style={styles.title}>
        <IndexLink
          to="/"
          style={styles.homeButton}
          activeStyle={styles.activeHomeButton}
        >
          Home
        </IndexLink>
      </div>
      <div style={styles.content}>{children}</div>
    </div>
  );
}

App.propTypes = {
  children: PropTypes.node,
};

App.defaultProps = {
  gameId: null,
  children: null,
};
