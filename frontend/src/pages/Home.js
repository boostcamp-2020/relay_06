import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image, Badge } from "react-bootstrap";
import Navbar from "../components/Navbar";
import Avatar from "../images/avatar.jpg";
import MiniRoom from "../images/miniroom.gif";
import "./Home.scss";
import axios from "axios";

function Home() {
  const [dummyUsers, setDummyUsers] = useState([]);

  useEffect(() => {
    axios.get(`/api/user/recommend`, {}).then(function (response) {
      console.log(response.data);
      setDummyUsers(response.data);
    });
  }, []);

  return (
    <>
      <Navbar />
      <Container className="home-container">
        <Row>
          <Col className="home-profile-wrapper" md={3}>
            <div className="profile-wrapper">
              <div className="profile-todayis">
                <span className="todayis-label">today is..</span>
                <span className="todayis-status">화이팅</span>
              </div>
              <Image src={Avatar}></Image>
              <div className="profile-name">
                안녕하세요~
                <br /> 라떼의 미니홈피입니다.
              </div>
            </div>
          </Col>
          <Col className="home-contents-wrapper" xs={12} md={{ span: 8, offest: 1 }}>
            <Container>
              <Row>
                <Col className="home-content" md={6}>
                  <div className="content-label">최근활동</div>
                  <ul>
                    <li>아무 기능이 없는 메인 화면 ^^</li>
                    <li>옛날 싸이월드 감성 느끼고 가세요~</li>
                    <li>모바일은 미니미를 볼 수 없어요ㅠ</li>
                  </ul>
                </Col>
                <Col className="home-content home-content-keywords" md={6}>
                  <div className="content-label">keywords</div>
                  <ul>
                    <li>
                      <Badge pill variant="primary">
                        여행
                      </Badge>
                    </li>
                    <li>
                      <Badge pill variant="primary">
                        맛집
                      </Badge>
                    </li>
                    <li>
                      <Badge pill variant="primary">
                        독서
                      </Badge>
                    </li>
                  </ul>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Image src={MiniRoom}></Image>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
        <span className="recommend_title">추천</span>
        <div className="recommend_container">
          {dummyUsers.map((user) => (
            <div className="recommend_user">
              <div className="recommend_image"></div>
              <span className="recommend_name">{user.id}</span>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}

export default Home;
