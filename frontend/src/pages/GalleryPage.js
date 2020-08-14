import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Gallery from "react-photo-gallery";
import { photos } from "../temp/photos.js";
import { Button, Image, Container, Row, Col } from "react-bootstrap";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class GalleryPage extends React.Component {
  render() {
    return (
      // <>
      <div>
        <Navbar />
        <Container>
          <Button
            style={{ float: "right" }}
            variant="primary"
            href="/gallery/upload"
          >
            사진등록&nbsp;
            <FontAwesomeIcon icon={faPencilAlt} />
          </Button>
        </Container>
        <Container>
          <Row>
            <Images />
          </Row>
        </Container>
      </div>
    );
  }
}

class Images extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageData: [
        {
          id: "1",
          url:
            "https://pgnqdrjultom1827145.cdn.ntruss.com/img/d6/3f/d63fc54819cd3fb0c319021e2e7cd6bfee951e8ce2db9e948bd828f538272da6_v1.jpg",
        },
        {
          id: "2",
          url:
            "https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg",
        },
      ],
    };
  }
  render() {
    return (
      <Col xs={6} md={4}>
        <Image
          src={this.state.imageData.map((image) => {
            return image.url;
          })}
          thumbnail
        />
      </Col>
    );
  }
}

export default GalleryPage;
