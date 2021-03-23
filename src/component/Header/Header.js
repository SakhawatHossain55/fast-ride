import React from "react";
import {
  Container,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar className="fixed-top" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/home">Fast Ride</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/destination">Destination</Nav.Link>
            <Nav.Link as={Link} to="#">Blog</Nav.Link>
            <Nav.Link as={Link} to="#">Contact</Nav.Link>
            <Nav.Link
              className="rounded"
              style={{ backgroundColor: "#FF6E40", color: "#fff" }}
              to="/signIn"
            >
              LogIn
            </Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
