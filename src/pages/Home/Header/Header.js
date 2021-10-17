import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import banner from '../../../images/logo3.png'

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="white" variant="light" fixed="top">
            <Container>
                <Navbar.Brand href="#home"><img className="img-fluid" src={banner} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/home">Home</Link>
                    </Nav>
                    <Nav className="d-flex align-items-center justify-content-center">
                            <Nav.Link href="#deets"><i class="fas fa-shopping-cart"></i></Nav.Link>
                            <Nav.Link className="mx-5" href="#deets">Login</Nav.Link>
                            <Link to="/login"><button className="btn btn-danger rounded-pill">Sign Up</button></Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;