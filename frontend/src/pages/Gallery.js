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
      <p></p>
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <Image src="https://i.imgur.com/Bo7B4AH.jpeg" thumbnail />
          </Col>
          <Col xs={6} md={4}>
            <Image
              src="https://i.pinimg.com/originals/cc/ab/ac/ccabacec8e84207f0b1a8a9d844049ec.gif"
              thumbnail
            />
          </Col>
          <Col xs={6} md={4}>
            <Image
              src="https://pgnqdrjultom1827145.cdn.ntruss.com/img/d6/3f/d63fc54819cd3fb0c319021e2e7cd6bfee951e8ce2db9e948bd828f538272da6_v1.jpg"
              thumbnail
            />
          </Col>
          <Col xs={6} md={3}>
            <Image
              src="https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg"
              thumbnail
            />
          </Col>
          <Col xs={6} md={3}>
            <Image src="https://i.imgur.com/Bo7B4AH.jpeg" thumbnail />
          </Col>
          <Col xs={6} md={3}>
            <Image src="https://i.imgur.com/Bo7B4AH.jpeg" thumbnail />
          </Col>
          <Col xs={6} md={3}>
            <Image src="https://i.imgur.com/Bo7B4AH.jpeg" thumbnail />
          </Col>
          <Col xs={6} md={3}>
            <Image src="https://i.imgur.com/Bo7B4AH.jpeg" thumbnail />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Gallery;
