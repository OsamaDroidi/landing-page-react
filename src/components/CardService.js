import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import icon from "../icons/Vector-2.svg";

function CardService() {
  return (
    <>
      <Card style={{ width: "20rem" }}>
        <Card.Body>
          <img src={icon} alt="" />
          <Card.Title>Design</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet, coectetur adipiscing elit. Suspendisse
            varius enim in eros .
          </Card.Text>
          <Card.Link href="#">Learn more</Card.Link>
        </Card.Body>
      </Card>
    </>
  );
}

export default CardService;
