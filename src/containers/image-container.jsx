import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getImageData, fetchImage } from '../stores/image-cache-store';

const ImageContainer = (props) => {
  const { imageData, loadImage, src, alt } = props;
  const cleanedProps = Object.assign({}, props);
  delete cleanedProps.imageData;
  delete cleanedProps.loadImage;
  delete cleanedProps.src;
  delete cleanedProps.alt;
  loadImage(src);
  return (
    <img
      alt={alt}
      src={imageData}
      {...cleanedProps}
    />
  );
};

ImageContainer.propTypes = {
  alt: PropTypes.string.isRequired,
  imageData: PropTypes.string,
  src: PropTypes.string.isRequired,
  loadImage: PropTypes.func.isRequired,
};

ImageContainer.defaultProps = {
  imageData: '',
};

export default connect(
  (state, { src }) => ({
    imageData: getImageData(src)(state),
  }),
  (dispatch) => ({
    loadImage: (imageUrl) => dispatch(fetchImage(imageUrl)),
  }),
)(ImageContainer);
