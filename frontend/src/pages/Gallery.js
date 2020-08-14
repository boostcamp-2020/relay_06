import React from "react";
import { Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
