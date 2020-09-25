import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row, Container } from "react-bootstrap";
import CardService from "./CardService";

function Service() {
  return (
    <>
      <Container>
        <h5>OUR SERVICES</h5>
        <h1>We build experience</h1>
        <h4>
          Lorem ipsum dolor sit amet, coectetur adipiscing elit. Suspendisse
          varius enim in eros .
        </h4>
        <Row>
          <Col sm>
            <CardService />
          </Col>
          <Col sm>
            <CardService />
          </Col>
          <Col sm>
            <CardService />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Service;
