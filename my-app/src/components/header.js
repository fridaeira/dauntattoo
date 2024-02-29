import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Appheader() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" className="font-link">
          Daun tattoo
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto font-link">
            <Nav.Link href="#home">Hem</Nav.Link>
            <Nav.Link href="#link">Galleri</Nav.Link>
            <Nav.Link href="#link">Skötselråd</Nav.Link>
            <Nav.Link href="#link">Vanliga frågor</Nav.Link>
            <Nav.Link href="#link">Merch</Nav.Link>
            <Nav.Link href="#link">Boka tid</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
