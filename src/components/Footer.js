import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import styled, { css } from "styled-components";
import logo from "../images/logo.png";
import gdpr from "../images/gdpr.png";
import trust from "../images/trust.png";
import Socialicon from "./Socialicon";

//...snip

function Footer() {
  const Footer = styled.div`
    background-color: #16133d;
    color: #ffffff;
    padding: 90px;
  `;

  const Image = styled.img`
    background-color: #ffffff;
    border-radius: 5px;
    margin: 5px;
  `;
  return (
    <>
      <Footer>
        <Container>
          <Row>
            <Col sm>
              <img
                alt=""
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}
              Freehand
              <p>
                We're brand strategy and digital design agency, building brands
                that matter in culture.
              </p>
              <div>
                {Socialicon.map(({ id, src, title, description }) => (
                  <Image key={id} src={src} title={title} alt={description} />
                ))}
              </div>
            </Col>
            <Col sm>
              <h4>Services</h4>
              <p>Blog</p>
              <p>Partner with freehand</p>
              <p>Apps &amp; Plugins</p>
              <p>FAQ</p>
              <p>UI Kit</p>
            </Col>
            <Col sm>
              <h4>Company</h4>
              <p>About</p>
              <p>Terms</p>
              <p>Privacy Policy</p>
              <p>Careers</p>
            </Col>
            <Col sm>
              <h4>CONTACT US</h4>
              <p>We’re Always Happy to Help</p>
              <p>mail@freehand.io</p>
              <img src={gdpr} />
              <img src={trust} />
            </Col>
          </Row>
          <p className="text-center">Copyright © 2020. Crafted with love.</p>
        </Container>
      </Footer>
    </>
  );
}

export default Footer;
