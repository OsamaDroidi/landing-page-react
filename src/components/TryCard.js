import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button } from "react-bootstrap";
import styled, { css } from "styled-components";
import trybg from "../images/trybg.png";

function TryCard() {
  const Background = styled.div`
    background-image: url(${trybg});
    border-radius: 16px;
    padding: 125px;
    text-align: center;
    color: #ffffff;
  `;
  const Button = styled.button`
    /* Adapt the colors based on primary prop */
    background: ${(props) => (props.primary ? "white" : "transparent")};
    color: ${(props) => (props.primary ? "black" : "white")};

    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid #ffffff;
    border-radius: 50px;
  `;
  return (
    <>
      <Container>
        <Background>
          <h1>Get started today and try 30 days free</h1>
          <h5>
            No contact, no set-up costs, just awesome way to organise your
            money.
          </h5>
          <Button primary>Try it for free</Button>
          <Button>Watch Demo</Button>
        </Background>
      </Container>
    </>
  );
}

export default TryCard;
