import React from 'react';
import PropTypes from 'prop-types';

const ImageContainer = (props) => {
  const { src, alt, style } = props;
  return (
    <img
      style={style}
      alt={alt}
      src={src.replace('http:', 'https:')}
    />
  );
};

ImageContainer.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  style: PropTypes.objectOf(PropTypes.string),
};

ImageContainer.defaultProps = {
  style: {},
};

export default ImageContainer;
