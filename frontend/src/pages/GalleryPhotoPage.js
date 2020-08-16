import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import './GalleryPhotoPage.scss';
import { Container, Badge, Button, Image } from 'react-bootstrap';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from '../plugin/axios';

function GalleryPhotoPage({ match }) {
  const [imageInfo, setImageInfo] = useState({
    id: 0,
    source: 'http://via.placeholder.com/350?text=Loding...',
    tags: [],
    time: ''
  });

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

  const deleteImage = async () => {
    const imageId = match.params.id;
    // await axios.delete(`/api/photo/${imageId}`).then(() => {
    //   alert('삭제되었습니다.');
    //   window.location = '/gallery';
    // });
    alert('삭제되었습니다.');
    window.location = '/gallery';
  };

  const tagClickHandler = (tag) => {
    alert(tag);
  };

  useEffect(() => {
    getImageInfo();
  }, []);

  return (
    <>
      <Navbar />
      <Container className="gallery-photo-page-container">
        <div className="photo-page-nav">
          <Button href="/gallery" variant="default">
            <FontAwesomeIcon icon={faArrowLeft} />
          </Button>
          <div className="photo-page-title">
            <h2> {imageInfo.time} 의 기록</h2>
          </div>
        </div>
        <div className="photo-page-tags">
          <span className="badge-label">
            <strong>Tags: </strong>
          </span>
          {imageInfo.tags.map((element) => (
            <Badge pill variant="primary" key={'tag_' + element} onClick={() => tagClickHandler(element)}>
              {' '}
              {element}{' '}
            </Badge>
          ))}
        </div>
        <div className="photo-page-image-wrapper">
          <Image src={imageInfo.source} fluid />
        </div>
        <div className="photo-page-menu">
          <Button onClick={deleteImage}>사진삭제</Button>
        </div>
      </Container>
    </>
  );
}

export default GalleryPhotoPage;
