import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import styled, { css } from "styled-components";

function CardPricing(props) {
  const Card = styled.div`
    border-top: 3px solid ${(props) => props.color};
    box-shadow: 0px 10px 35px rgba(0, 0, 0, 0.03);
    text-align: center;
  `;

  const Title = styled.h1`
    color: ${(props) => props.color};
  `;

  const Button = styled.button`
    background: ${(props) => props.primary};
    border-radius: 50px;
    border: 2px solid #16133d;
    color: ${(props) => props.text};
    margin: 0 1em;
    padding: 0.25em 1em;
  `;

  return (
    <>
      <Card color={props.color} className="pt-5 pb-5">
        <h5>{props.title}</h5>
        <Title color={props.color}>{props.price}</Title>
        <p>per month</p>
        <p>Lorem ipsum dolor sit amet, coectetur adipiscing elit.</p>
        <Button primary={props.primary} text={props.text} href="#">
          Get Started
        </Button>
      </Card>
    </>
  );
}

export default CardPricing;
