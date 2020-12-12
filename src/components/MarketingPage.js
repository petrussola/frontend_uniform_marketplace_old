import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function MarketingPage() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>Uniforms inc.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/signup">Sign Up</Nav.Link>
            <Nav.Link href="/signin">Sign In</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {`I am the marketing page in ${process.env.NODE_ENV} environment`}
    </div>
  );
}
