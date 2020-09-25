import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row, Container, Button, Carousel } from "react-bootstrap";
import pic from "../images/pic.jpg";
import picc from "../images/picc.jpg";
import piccc from "../images/piccc.jpg";

function Hero() {
  return (
    <>
      <Container>
        <Row>
          <Col sm>
            <h1>Freehand your brand with a beautiful website</h1>
            <h4>
              Lorem ipsum dolor sit amet, coectetur adipiscing elit. Suspendisse
              varius enim in eros .
            </h4>
            <Button variant="primary">View Projects</Button>
            <Button variant="outline-primary">Learn more</Button>
          </Col>
          <Col sm>
            <Carousel fade indicators={false}>
              <Carousel.Item interval={2}>
                <img className="d-block w-100" src={pic} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item interval={2}>
                <img className="d-block w-100" src={picc} alt="Third slide" />
              </Carousel.Item>
              <Carousel.Item interval={2}>
                <img className="d-block w-100" src={piccc} alt="Third slide" />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Hero;
