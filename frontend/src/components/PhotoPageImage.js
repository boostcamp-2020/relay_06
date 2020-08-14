import React, { useState, useEffect } from 'react';
import * as api from '../lib/image-api';
import { Image } from 'react-bootstrap';

function PhotoPageImage(props) {
  const [imageInfo, setImageInfo] = useState({});

  useEffect(() => {
    const imageId = props.imageId;
    api.getImage(imageId).then((imageInfo) => setImageInfo(imageInfo));
  });

  return <Image src={imageInfo.url} fluid />;
}

export default PhotoPageImage;
