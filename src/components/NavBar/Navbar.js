import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';



function NavBar(props){
    return (
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Navbar.Brand href="#home">Anton Norberg</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            {/*<Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>*/}
            <Navbar.Text>
            <a href="https://github.com/annorberg98/" target="_blank" rel="noopener noreferrer" className="social-icons">
                <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/anton-norberg/" target="_blank" rel="noopener noreferrer" className="social-icons">
                <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="mailto:me@antonnorberg.se" target="_blank" rel="noopener noreferrer" className="social-icons">
                <i className="fas fa-envelope"></i>
            </a>
            </Navbar.Text>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    );
} export default NavBar;