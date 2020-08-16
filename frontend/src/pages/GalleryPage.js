import React, { Component } from "react";
import Navbar from "../components/Navbar";
import axios from "../plugin/axios";
import { Button, Image, Container, Row, Col } from "react-bootstrap";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { imageData } from "../temp/images.js";

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
      imageData: [],
    };
  }

  getImageInfo = async () => {
    try {
      const response = await axios.get(`/api/photo/`);
      console.log(response.data);
      this.setState(() => {
        let tmp = [];
        for (let photo of response.data) {
          tmp.push({
            id: photo.id,
            url: process.env.REACT_APP_BASE_URL + photo.source,
          });
        }
        return {
          imageData: tmp,
        };
      });
    } catch (err) {
      alert("게시글을 불러오는 과정에서 오류가 발생했습니다.");
    }
  };

  render() {
    return (
      <Row>
        {this.state.imageData.map((image, i) => {
          return (
            <Col xs={6} md={4} key={i}>
              <a href={"./gallery/" + image.id}>
                <ImageInfo id={image.id} url={image.url} />
              </a>
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
