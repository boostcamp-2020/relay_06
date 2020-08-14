import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Gallery from "react-photo-gallery";
import { photos } from "../temp/photos.js";
import { Button, Image, Container, Row, Col } from "react-bootstrap";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { imageData } from "../temp/images.js";

class GalleryPage extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Container>
          <br />
          <Button
            style={{ float: "right" }}
            variant="primary"
            href="/gallery/upload"
          >
            사진등록&nbsp;
            <FontAwesomeIcon icon={faPencilAlt} />
          </Button>
        </Container>
        <br />
        <br />
        <br />
        <Container>
          <Images />
        </Container>
      </div>
    );
  }
}

class Images extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageData,
    };
  }
  render() {
    return (
      <Row>
        {this.state.imageData.map((image, i) => {
          return (
            <Col xs={6} md={4}>
              <ImageInfo id={image.id} url={image.url} key={i} />
            </Col>
          );
        })}
      </Row>
    );
  }
}

class ImageInfo extends React.Component {
  render() {
    return <Image src={this.props.url} thumbnail></Image>;
  }
}

export default GalleryPage;
