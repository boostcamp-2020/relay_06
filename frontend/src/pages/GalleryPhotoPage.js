import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Container, Badge, Button, Image } from "react-bootstrap";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "../plugin/axios";
import moment from "moment";
import "moment-timezone";
import BaseImage from "../images/baseImage.jpg";
import "./GalleryPhotoPage.scss";

function GalleryPhotoPage({ match }) {
  const [imageInfo, setImageInfo] = useState({
    id: 0,
    source: "",
    tags: [],
    time: "",
  });

  const getImageInfo = async () => {
    const imageId = match.params.id;
    try {
      const response = await axios.get(`/api/photo/${imageId}`);
      const imageInfo = response.data;
      setImageInfo({
        id: imageInfo.id,
        source: process.env.REACT_APP_BASE_URL + imageInfo.source,
        time: moment(imageInfo.time).tz('Asia/Seoul').format('YYYY-MM-DD HH:mm:ss'),
        tags: imageInfo.tag.split(',')
      });
    } catch (err) {
      console.log(err);
      alert('삭제된 사진이거나 요청이 잘못되었습니다.');
      window.location = '/gallery';
    }
  };

  const deleteImage = async () => {
    const imageId = match.params.id;
    await axios
      .delete(`/api/photo/${imageId}`)
      .then(() => {
        alert("삭제되었습니다.");
        window.location = "/gallery";
      })
      .catch((err) => {
        alert("사진을 삭제하는 과정에서 오류가 발생했습니다.");
      });
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
            <Badge
              pill
              variant="primary"
              key={"tag_" + element}
              onClick={() => tagClickHandler(element)}
            >
              {" "}
              {element}{" "}
            </Badge>
          ))}
        </div>
        <div className="photo-page-image-wrapper">
          <Image src={imageInfo.source ? imageInfo.source : BaseImage} fluid />
        </div>
        <div className="photo-page-menu">
          <Button onClick={deleteImage}>사진삭제</Button>
        </div>
      </Container>
    </>
  );
}

export default GalleryPhotoPage;
