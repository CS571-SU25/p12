import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router";

const NAVBAR_STYLE = {
    backgroundColor: "#ffffff",
    //backgroundColor: "#c60c30",
    borderBottom: "2px solid #c60c30",
};
const LINK_STYLE = {
    //color: "#ffffff",
    color: "#c60c30",
    fontWeight: 500,
    margin: "0 1rem",
};

export default function AppNavBar(props) {
    return (
        <Navbar expand="lg" style={NAVBAR_STYLE} variant="light" sticky="top">
            <Container fluid className="justify-content-between">
                <Nav className="align-items-center">
                    <Nav.Link as={Link} to="/" style={LINK_STYLE}>
                        Home Page
                    </Nav.Link>
                    <Nav.Link as={Link} to="/knowledge" style={LINK_STYLE}>
                        HK Knowledge
                    </Nav.Link>
                    <Nav.Link as={Link} to="/food" style={LINK_STYLE}>
                        Food
                    </Nav.Link>
                    <Nav.Link as={Link} to="/tourist" style={LINK_STYLE}>
                        Tourist Attractions
                    </Nav.Link>
                    <Nav.Link as={Link} to="/music" style={LINK_STYLE}>
                    Music
                    </Nav.Link>
                    <Nav.Link as={Link} to="/travelGuide" style={LINK_STYLE}>
                        Travel Guide
                    </Nav.Link>
                </Nav>

                <Nav className="align-items-center">
                    <Nav.Link as={Link} to="/bookmark" style={LINK_STYLE}>
                        Bookmark
                    </Nav.Link>
                </Nav>


            </Container>
        </Navbar>
    );
}
