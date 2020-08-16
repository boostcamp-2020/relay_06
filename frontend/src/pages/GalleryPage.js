import React, { Component } from "react";
import Navbar from "../components/Navbar";
import axios from "../plugin/axios";
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

    this.getImageInfo();
    this.state = {
      imageData,
    };
  }

  getImageInfo = async () => {
    const imageInfo = 12;
    await axios
      .get(`/api/photo/`)
      .then((response) => {
        for (let i in response.data)
          imageData[i].url =
            process.env.REACT_APP_BASE_URL + response.data[i].source;
      })
      .catch((err) => {
        alert("삭제된 사진이거나 요청이 잘못되었습니다.");
        window.location = "/gallery";
      });
  };

  render() {
    return (
      <Row>
        {this.state.imageData.map((image, i) => {
          return (
            <Col xs={6} md={4} key={i}>
              <ImageInfo id={image.id} url={image.url} />
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
