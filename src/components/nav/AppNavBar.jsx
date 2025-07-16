import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router";

export default function AppNavBar(props){
    return <Navbar>
        <Container fluid>
            <Nav.Link as={Link} to = "/">Home Page</Nav.Link>
            <Nav.Link as={Link} to = "/food">Food</Nav.Link>
            <Nav.Link as={Link} to ="/tourist">Tourist Attractions</Nav.Link>
            <Nav.Link as={Link} to ="/log-in">Log in</Nav.Link>
            <Nav.Link as={Link} to="/sign-up">Sign Up</Nav.Link>
        </Container>
    </Navbar>
}