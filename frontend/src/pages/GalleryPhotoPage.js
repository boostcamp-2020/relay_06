import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
// import './GalleryPhotoPage.css';
import { Jumbotron, Image } from 'react-bootstrap';
import * as api from '../lib/image-api';

function GalleryPhotoPage({ match }) {
  const [imageInfo, setImageInfo] = useState({ id: 0, source: '', tags: [], time: '' });

  const getImageInfo = () => {
    const imageId = match.params.id;
    // await axios.get(`/api/photo/${imageId}`).then((imageInfo) => setImageInfo(imageInfo));
    setImageInfo({
      id: imageId,
      source: 'http://placeimg.com/640/480/any',
      tags: ['집', '개', '고양이'],
      time: '2020-08-14 12:30'
    });
  };

  useEffect(() => {
    window.addEventListener('load', getImageInfo);
  });

  return (
    <>
      <Navbar />
      <Jumbotron>
        <div class="btn-group-lg" role="group" aria-label="...">
          {tags.map((element) => (
            <button type="button" class="btn btn=default">
              {' '}
              {element}{' '}
            </button>
          ))}
        </div>
        <p> {time} </p>
        <div class="text-center">
          <Image src={imageInfo.url} fluid />
        </div>
      </Jumbotron>
    </>
  );
}

export default GalleryPhotoPage;
