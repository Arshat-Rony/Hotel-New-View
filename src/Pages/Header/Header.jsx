import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import "./Header.css"
import img from "../../images/logo/House_real_estate_logo_template-removebg-preview.png"
import { useAuthState } from 'react-firebase-hooks/auth';
import { LinkContainer } from "react-router-bootstrap"
import CustomLink from '../../CustomLink/CustomLink';
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth)
    return (
        <div className='header'>
            <Navbar bg="dark" variant='dark' expand="lg">
                <Container className='d-flex justify-content-between align-items-center'>
                    <Navbar.Brand className='d-flex justify-content-center align-items-center flex-column' href="#home">
                        <img src={img} width="100px" alt="" />
                        <p className='logo-text'> New View</p>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto ">
                            <div className='d-flex align-items-center'>
                                <LinkContainer to='/home'>
                                    <Nav.Link className='me-3' href="/home">Home</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to='/about'>
                                    <Nav.Link className='me-3' href="/about">About</Nav.Link>
                                </LinkContainer>
                            </div>
                            <LinkContainer className='me-3 log-in-container' to='/signup'>
                                {
                                    user
                                        ?
                                        <Button id='log-inout' variant='none' onClick={() => signOut(auth)} className='fs-5 fw-bold text-white' >Sign Out</Button>
                                        :
                                        <Button id='log-in-out' variant='none' className='fs-5 fw-bold text-white' >SignUp</Button>
                                }
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;