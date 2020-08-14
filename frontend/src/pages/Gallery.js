import React from 'react';
import { Button } from 'react-bootstrap';

const Gallery = () => {
  return (
    <div>
      <h2>갤러리!</h2>
      <Button variant="primary" href="/upload/image">
        사진등록
      </Button>
    </div>
  );
};

export default Gallery;
