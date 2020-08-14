import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
// import './GalleryPhotoPage.css';
import { Jumbotron, Image } from 'react-bootstrap';
import * as api from '../lib/image-api';

/* src= "image.png" 에 이미지 링크 추가하면 될 것 같음 */
function GalleryPhotoPage({ match }) {
  // const tags = _tags;
  // const imageUrl = _imageUrl;
  // const time = _time;

  const [imageInfo, setImageInfo] = useState({});

  useEffect(() => {
    const imageId = match.params.id;
    api.getImage(imageId).then((imageInfo) => setImageInfo(imageInfo));
  });

  // test data
  let tags = ['집', '개', '고양이'];
  let imageUrl = '../logo512.png';
  let time = '2020-08-14 12:30';
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
