import React from 'react';
import PropTypes from 'prop-types';

const ImageContainer = (props) => {
  const { src, alt } = props;
  return (
    <img
      alt={alt}
      src={src.replace('http:', 'https:')}
    />
  );
};

ImageContainer.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

export default ImageContainer;
