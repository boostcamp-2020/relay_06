import React, { Component } from "react";
import Navbar from "../components/Navbar";
import axios from "../plugin/axios";
import { Button, Image, Container, Row, Col, Form } from "react-bootstrap";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class LoginPage extends React.Component {
  state = {
    id: "",
    password: "",
  };

  idChange = (e) => {
    this.setState({
      id: e.target.value,
    });
  };

  passwordChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  submitClick = async () => {
    console.log("button clicked");
    let id = this.state.id;
    let password = this.state.password;
    try {
      const response = await axios.post(`/api/user/signup`, {
        id,
        password,
      });
      // response 온 값을 현재 id password와 비교해서 맞으면 통과
    } catch (err) {
      alert("아이디가 존재하지 않거나 비밀번호가 틀립니다.");
    }
  };

  render() {
    return (
      <div>
        <Navbar></Navbar>
        <Container>
          <Form>
            <Form.Group controlId="formBasicId">
              <Form.Label>ID</Form.Label>
              <Form.Control
                value={this.state.id}
                onChange={this.idChange}
                type="id"
                placeholder="Enter ID"
              />
              <Form.Text className="text-muted">
                We'll never share your id with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                value={this.state.password}
                onChange={this.passwordChange}
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <Button onClick={this.submitClick} variant="primary" type="">
              Submit
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default LoginPage;
