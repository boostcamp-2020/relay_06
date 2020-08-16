import React, { Component } from "react";
import Navbar from "../components/Navbar";
import { Button, Image, Container, Row, Col } from "react-bootstrap";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { imageData } from "../temp/images.js";
import axios from "../plugin/axios";

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
            <Col xs={6} md={4} key={i}>
              <ImageInfo id={image.id} url={image.url} />
            </Col>
          );
        })}
      </Row>
    );
  }
}

// const getImages = async () => {
//   await axios
//     .get(`/api/photo/`)
//     .then((response) => {
//       const imageInfo = response.data;
//       console.log(imageInfo);
//       // setImageInfo({
//       //   id: imageInfo.id,
//       //   source: process.env.REACT_APP_BASE_URL + imageInfo.source,
//       //   time: moment(imageInfo.time)
//       //     .tz("Asia/Seoul")
//       //     .format("YYYY-MM-DD HH:mm:ss"),
//       //   tags: imageInfo.tag.split(","),
//       // });
//     })
//     .catch((err) => {
//       console.log(err);
//       alert("삭제된 사진이거나 요청이 잘못되었습니다.");
//       window.location = "/gallery";
//     });
// };

class ImageInfo extends React.Component {
  render() {
    return <Image src={this.props.url} thumbnail></Image>;
  }
}

export default GalleryPage;
