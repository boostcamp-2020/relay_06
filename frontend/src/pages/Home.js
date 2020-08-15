import React from 'react';
import Navbar from '../components/Navbar';
import { Container, Row, Col } from 'react-bootstrap';

function Home() {
  return (
    <>
      <Navbar />
      <Container>
        <Row>
          <Col>홈</Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
