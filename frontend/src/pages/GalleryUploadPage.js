import React, { useState } from "react";
import axios from "../plugin/axios.js";
import { Redirect } from "react-router-dom";

import Navbar from "../components/Navbar";
import { Container, Row, Image, Form, Button } from "react-bootstrap";

function GalleryUploadPage() {
  const [file, setFile] = useState(0);
  const [redirect, setRedirect] = useState(false);
  const [url, setUrl] = useState(
    "https://icon-library.net/images/upload-icon-png/upload-icon-png-28.jpg"
  );

  const onChange = (e) => {
    if (!e.target.files[0]) {
      return;
    }
    setFile(e.target.files[0]);
    console.log(e.target.files[0]);

    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onloadend = () => {
      setUrl(reader.result.toString());
    };
  };

  const onFormSubmit = (e) => {
    e.preventDefault(); // submit 멈추는 경우?
    // console.log('dfl;asldfj');
    fileUpload(file).then((response) => {
      console.log(response);
      if (response.data === "success") {
        console.log("success");
        setRedirect(true);
      } else {
        alert("파일 업로드를 실패했습니다.");
      }
    });
  };

  const fileUpload = (file) => {
    const host = "/api/photo/upload/"; /// url 입력 필요
    const formData = new FormData();
    formData.append("source", file);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    console.log(file);
    return axios.post(host, formData, config);
  };

  if (redirect) {
    return <Redirect to="/gallery" />;
  } else {
    return (
      <>
        <Navbar />
        <Container className="justify-content-md-center">
          <br></br>
          <Row className="justify-content-md-center">
            <Form onSubmit={onFormSubmit}>
              <label for="upload">
                <span style={{ fontSize: "50px", fontWeight: "bold" }}>choose file</span>
                <Form.File
                  id="upload"
                  type="file"
                  onChange={onChange}
                  style={{ display: "none" }}
                />
              </label>

              <Row className="justify-content-md-center">
                <Button type="submit">Upload</Button>
              </Row>
            </Form>
          </Row>
          <br></br>
          <Row xs={3} md={2} className="justify-content-md-center">
            <label for="upload">
              <Image src={url} thumbnail />
            </label>
          </Row>
          <br></br>
        </Container>
      </>
    );
  }
}

export default GalleryUploadPage;
