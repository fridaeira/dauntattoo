import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { SocialIcon } from "react-social-icons";

export default function Appfooter() {
  return (
    <Container
      fluid
      style={{
        backgroundColor: "#232222",
        color: "#F6F4E8",
        padding: "20px",
        textAlign: "center",
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
          <p>Erik Dahlbergsgatan 18</p>
          <p>Göteborg, 411 26</p>
        </Col>
        <Col>
          <h1>Tranås</h1>
          <p>Norra Storgatan 71</p>
          <p>Tranås, 57334</p>
        </Col>
        <Col>
          <h1>Sociala medier</h1>
          <SocialIcon
            url="https://www.tiktok.com/@dauntattoo"
            bgColor="#B70A16"
            style={{ marginRight: "30px" }}
          />
          <SocialIcon
            url="https://www.instagram.com/dauntattoo/"
            bgColor="#B70A16"
          />
        </Col>
      </Row>
      <p>@ 2024 Daun tattoo</p>
    </Container>
  );
}
