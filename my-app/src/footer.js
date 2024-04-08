import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Appfooter() {
  return (
    <Container
      fluid
      style={{
        backgroundColor: "#232222",
        color: "#F6F4E8",
        padding: "20px",
      }}
    >
      <Row>
        <Col>
          <h1>Länkar</h1>
          <p>Hem</p>
          <p>Galleri</p>
          <p>Vanliga frågor</p>
          <p>Skötselråd</p>
          <p>Merch</p>
          <p>Boka tid</p>
        </Col>
        <Col>
          <h1>Göteborg</h1>
          <p>adress</p>
        </Col>
        <Col>
          <h1>Tranås</h1>
          <p>Norra Storgatan 71</p>
          <p>Tranås, 57334</p>
          <p>Sverige</p>
        </Col>
      </Row>
    </Container>
  );
}
