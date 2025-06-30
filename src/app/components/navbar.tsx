"use client";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    <>
      <Navbar className="custom-navbar">
        <Container fluid>
          <div
            style={{
              display: "flex",
            }}
            className="navbar-links"
          >
            <Navbar.Brand href="/">
              <img src="logo.jpg" className="navbar-icon"></img>
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/events">Events</Nav.Link>
              <Nav.Link href="/getinvolved" style={{ whiteSpace: "nowrap" }}>
                Contact Us
              </Nav.Link>
              <Nav.Link href="/aboutus">About</Nav.Link>
            </Nav>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
