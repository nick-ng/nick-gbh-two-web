import React from 'react';
import PropTypes from 'prop-types';

import NavLink from '../nav-link';

export default function Nav(props) {
  return (
    <div className={props.className}>
      <NavLink to="/" onlyActiveOnIndex>Blog Page</NavLink>
      <NavLink to="/test/">Test Page Zero</NavLink>
      <NavLink to="/editor/">Test Editor</NavLink>
    </div>
  );
}

Nav.propTypes = {
  className: PropTypes.string,
};

Nav.defaultProps = {
  className: undefined,
};
