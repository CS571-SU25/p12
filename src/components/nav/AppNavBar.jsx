import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router";

export default function AppNavBar(props) {
    return (
        <Navbar bg="light" variant="light" expand="lg" sticky="top" style={{ borderBottom: "1px solid #e0e0e0" }}>
            <Container fluid className="justify-content-between">
                <Nav className="align-items-center">
                    <Nav.Link as={Link} to="/">
                        Home Page
                    </Nav.Link>
                    <Nav.Link as={Link} to="/knowledge">
                        HK Knowledge
                    </Nav.Link>
                    <Nav.Link as={Link} to="/food">
                        Food
                    </Nav.Link>
                    <Nav.Link as={Link} to="/tourist">
                        Tourist Attractions
                    </Nav.Link>
                </Nav>

                <Nav className="align-items-center">
                    <Nav.Link as={Link} to="/log-in">
                        Log in
                    </Nav.Link>
                    <Nav.Link
                        as={Link}
                        to="/sign-up"
                        style={{ padding: "0.25rem 0.75rem", lineHeight: "1.5" }}
                    >
                        Sign Up
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}
