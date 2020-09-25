import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row, Container, Card } from "react-bootstrap";
import picover from "../images/picover.png";

function Features() {
  return (
    <>
      <Container>
        <h5>OUR TIPS FOR YOU</h5>
        <h1>Important features</h1>
        <h4>
          Lorem ipsum dolor sit amet, coectetur adipiscing elit. Suspendisse
          varius enim in eros .
        </h4>
        <Row>
          <Col sm>
            <Card className="bg-dark text-white " style={{ width: "25rem" }}>
              <Card.Img src={picover} alt="Card image" />
              <Card.ImgOverlay className="mt-5">
                <h4>120 million curious readers and growing.</h4>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col sm>
            <Card className="bg-dark text-white " style={{ width: "20rem" }}>
              <Card.Img src={picover} alt="Card image" />
              <Card.ImgOverlay>
                <Card.Text className="">
                  Expand your reading. Expand your mind.
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Features;
