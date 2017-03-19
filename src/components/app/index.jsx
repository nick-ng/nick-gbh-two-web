import React, { PropTypes } from 'react';

export default function App({ children }) {
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
  return (
    <div style={styles.appStyle}>
      <h1 style={styles.title}>Test</h1>
      <div>{children}</div>
    </div>
  );
}

App.propTypes = {
  children: PropTypes.node,
};

App.defaultProps = {
  children: <div />,
};
