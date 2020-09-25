import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import styled, { css } from "styled-components";
import CardPricing from "./CardPricing";

function Pricing() {
  return (
    <>
      <Container>
        <h1>Choose the plan that’s right for your business</h1>
        <h4>
          Lorem ipsum dolor sit amet, coectetur adipiscing elit. Suspendisse
          varius enim in eros .
        </h4>
        <Row>
          <Col sm>
            <CardPricing
              color="#007FFC"
              title="Started plan"
              price="Free"
              primary="transparent"
              text="#16133d"
            ></CardPricing>
          </Col>
          <Col sm>
            <CardPricing
              color="#52C29D"
              title="Enterprise plan"
              price="$20.00"
              primary="transparent"
              text="#16133d"
            />
          </Col>
          <Col sm>
            <CardPricing
              color="#F04D5D"
              title="Enterprise plan"
              price="$50.00"
              primary="#16133d"
              text="#ffffff"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Pricing;
