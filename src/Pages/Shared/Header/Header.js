import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../Images/logo.png';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
    };

    return (
        <Navbar bg="primary" className="text-light" sticky="top" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/"><img src={logo} height="50" alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="home#home">Home</Nav.Link>
                        <Nav.Link href="home#services">Services</Nav.Link>
                        <Nav.Link href="home#experts">Experts</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        {user &&
                            <>
                                <Nav.Link as={Link} to="/addService">Add Service</Nav.Link>
                                <Nav.Link as={Link} to="/manage">Manage</Nav.Link>
                            </>
                        }
                        <Nav.Link >{user ? <button className="btn btn-light" onClick={logout}>Logout</button> : <button className="btn btn-light"><Link to='/login'>Sign In</Link></button>}</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;