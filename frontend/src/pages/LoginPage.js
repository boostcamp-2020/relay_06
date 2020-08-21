import React, { useState, Component } from "react";
import BeforeNavbar from "../components/BeforeNavbar";
import axios from "axios";
import { Button, Image, Container, Row, Col, Form } from "react-bootstrap";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router-dom";
export default function LoginPage() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const idChange = (e) => {
    setId(e.target.value);
  };

  const passwordChange = (e) => {
    setPassword(e.target.value);
  };
  let history = new useHistory();
  const submitClick = () => {
    console.log("button clicked");

    try {
      axios
        .post(`/api/user/signin`, {
          id: id,
          pw: password,
        })
        .then(function (response) {
          console.log(response);
          history.push("/diaryHome");
        });
      // response 온 값을 현재 id password와 비교해서 맞으면 통과
    } catch (err) {
      alert("아이디가 존재하지 않거나 비밀번호가 틀립니다.");
    }
  };

  return (
    <div>
      <BeforeNavbar />
      <Container>
        <Form>
          <Form.Group controlId="formBasicId">
            <Form.Label>ID</Form.Label>
            <Form.Control value={id} onChange={idChange} type="id" placeholder="Enter ID" />
            <Form.Text className="text-muted">
              We'll never share your id with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              value={password}
              onChange={passwordChange}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Button onClick={submitClick} variant="primary" type="">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}
