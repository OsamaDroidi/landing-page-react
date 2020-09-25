import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import styled, { css } from "styled-components";
import logo from "../images/logo.png";

function Header() {
  const Button = styled.button`
    background: transparent;
    border-radius: 8px;
    border: 2px solid #16133d;
    color: #16133d;
    margin: 1em 0 1em 1em;
    padding: 0.30em 1.5em;

    ${(props) =>
      props.primary &&
      css`
        background: #16133d;
        color: white;
      `};
  `;

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Freehand
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto ml-auto ">
              <Nav.Link href="#home" className="pr-5">
                Home
              </Nav.Link>
              <Nav.Link href="#features" className="pr-5">
                Potfolio
              </Nav.Link>
              <Nav.Link href="#pricing" className="pr-5">
                Pages
              </Nav.Link>
              <Nav.Link href="#pricing" className="pr-5">
                Blog
              </Nav.Link>
            </Nav>

            <Nav>
              <Button>Sign in</Button>
              <Button primary>Login</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
