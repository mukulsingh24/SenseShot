import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Hero() {
  const imgStyle = {
    display: "block",
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  return (
    <div>
      <h1 className="fw-bold mx-auto text-center pt-5">SenseShot</h1>
      <p className="lead text-center w-75 mx-auto pt-2">
        A modern, community-driven platform for discovering, sharing, and
        downloading stunning high-resolution photos. Built for creators,
        photographers, and brands to showcase their visual stories and inspire
        the world.
      </p>
      <Container fluid>
        <Row className="pt-4">
          <Col className="pb-2">
            <img
              src="https://plus.unsplash.com/premium_photo-1761924582709-2c26c01d289a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1529"
              alt=""
              style={imgStyle}
            />
          </Col>
          <Col
            className="pb-2"
            style={{
              paddingLeft: '1px', 
              paddingRight: '1px'
            }}
          >
            <img
              src="https://plus.unsplash.com/premium_photo-1761924582709-2c26c01d289a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1529"
              alt=""
              style={imgStyle}
            />
          </Col>
          <Col className="pb-2">
            <img
              src="https://plus.unsplash.com/premium_photo-1761924582709-2c26c01d289a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1529"
              alt=""
              style={imgStyle}
            />
          </Col>
        </Row>

        <Row className="pt-1">
          <Col className="pb-2">
            <img
              src="https://plus.unsplash.com/premium_photo-1761924582709-2c26c01d289a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1529"
              alt=""
              style={imgStyle}
            />
          </Col>
          <Col className="pb-2" style={{
              paddingLeft: '1px', 
              paddingRight: '1px'
            }}>
            <img
              src="https://plus.unsplash.com/premium_photo-1761924582709-2c26c01d289a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1529"
              alt=""
              style={imgStyle}
            />
          </Col>
          <Col className="pb-2">
            <img
              src="https://plus.unsplash.com/premium_photo-1761924582709-2c26c01d289a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1529"
              alt=""
              style={imgStyle}
            />
          </Col>
        </Row>

        <Row>
          <Col className="pb-2">
            <img
              src="https://plus.unsplash.com/premium_photo-1761924582709-2c26c01d289a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1529"
              alt=""
              style={imgStyle}
            />
          </Col>
          <Col className="pb-2" style={{
              paddingLeft: '1px', 
              paddingRight: '1px'
            }}>
            <img
              src="https://plus.unsplash.com/premium_photo-1761666868591-933ada376a2d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=685"
              alt=""
              style={imgStyle}
            />
          </Col>
          <Col className="pb-2">
            <img
              src="https://plus.unsplash.com/premium_photo-1761924582709-2c26c01d289a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1529"
              alt=""
              style={imgStyle}
            />
          </Col>
        </Row>

        <Row>
          <Col className="pb-2">
            <img
              src="https://plus.unsplash.com/premium_photo-1761924582709-2c26c01d289a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1529"
              alt=""
              style={imgStyle}
            />
          </Col>
          <Col className="pb-2" style={{
              paddingLeft: '1px', 
              paddingRight: '1px'
            }}>
            <img
              src="https://plus.unsplash.com/premium_photo-1761666868591-933ada376a2d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=685"
              alt=""
              style={imgStyle}
            />
          </Col>
          <Col className="pb-2">
            <img
              src="https://plus.unsplash.com/premium_photo-1761924582709-2c26c01d289a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1529"
              alt=""
              style={imgStyle}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Hero;
