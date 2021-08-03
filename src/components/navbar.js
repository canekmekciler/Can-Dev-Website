import React from "react"
import { Navbar, Container, Nav } from "react-bootstrap"
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse"
import NavbarToggle from "react-bootstrap/esm/NavbarToggle"


export default function Header() {
  return (
    <Navbar bg="danger" variant="dark" sticky="top" expand="md">
      <Container>
        <Navbar.Brand href="#home">Can Ekmekciler</Navbar.Brand>
        <NavbarToggle />
        <NavbarCollapse>
          <Nav className="ms-auto">
            <Nav.Link href="#main">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
}