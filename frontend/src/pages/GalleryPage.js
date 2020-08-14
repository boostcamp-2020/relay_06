import React from 'react';
import Navbar from '../components/Navbar';
import Gallery from 'react-photo-gallery';
import { photos } from '../temp/photos.js';
import { Button } from 'react-bootstrap';

function GalleryPage() {
  return (
    <>
      <Navbar />
      <Button variant="primary" href="/gallery/upload">
        사진등록
      </Button>

      <Gallery photos={photos} />
    </>
  );
}

export default GalleryPage;
