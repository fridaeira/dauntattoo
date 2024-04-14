import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

import Row from "react-bootstrap/Row";

export default function Appgalleri() {
  return (
    <Container>
      <h1
        style={{ marginTop: "40px", marginBottom: "40px", textAlign: "center" }}
      >
        GALLERI
      </h1>
      <Row style={{ paddingBottom: "20px" }}>
        <Col xs={6} md={4}>
          <Image src="philip1.jpg" alt="Bild på Philip Daun" rounded fluid />
        </Col>
        <Col xs={6} md={4}>
          <Image src="philip1.jpg" alt="Bild på Philip Daun" rounded fluid />
        </Col>
        <Col xs={6} md={4}>
          <Image src="philip1.jpg" alt="Bild på Philip Daun" rounded fluid />
        </Col>
      </Row>
      <Row style={{ paddingBottom: "20px" }}>
        <Col xs={6} md={4}>
          <Image src="philip1.jpg" alt="Bild på Philip Daun" rounded fluid />
        </Col>
        <Col xs={6} md={4}>
          <Image src="philip1.jpg" alt="Bild på Philip Daun" rounded fluid />
        </Col>
        <Col xs={6} md={4}>
          <Image src="philip1.jpg" alt="Bild på Philip Daun" rounded fluid />
        </Col>
      </Row>
      <Row style={{ paddingBottom: "20px" }}>
        <Col xs={6} md={4}>
          <Image src="philip1.jpg" alt="Bild på Philip Daun" rounded fluid />
        </Col>
        <Col xs={6} md={4}>
          <Image src="philip1.jpg" alt="Bild på Philip Daun" rounded fluid />
        </Col>
        <Col xs={6} md={4}>
          <Image src="philip1.jpg" alt="Bild på Philip Daun" rounded fluid />
        </Col>
      </Row>
      <h2
        className="font-link2"
        style={{
          color: "#B70A16",
          textAlign: "center",
          fontSize: "40px",
          marginTop: "40px",
        }}
      >
        VILL DU SE MER?
      </h2>
      <h2
        className="font-link2"
        style={{
          color: "#B70A16",
          textAlign: "center",
          fontSize: "30px",

          marginBottom: "40px",
        }}
      >
        På min instagram delar jag med mig av fler bilder på tatueringar jag
        gjort
      </h2>
      <div style={{ textAlign: "center" }}>
        <button className="button" style={{ marginBottom: "40px" }}>
          JAG VILL SE MER!
        </button>
      </div>
    </Container>
  );
}
