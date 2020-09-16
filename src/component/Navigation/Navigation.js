import React from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import logo from '../../image/Group1330.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navigation = () => {
    const btnStyle = {
        border: 'none',
        outline: 'none',
        height: 44
    }
    const searchBoxStyle = {
        border: 'none',
        outline: 'none',
        background: 'none',
        width: 300,
        height: 44
    }
    const formStyle = {
        border: '1px solid white',
        background: 'rgba(255, 255, 255, 0.2)',
        borderRadius: '7px'
    }
    const loginBtnStyle = {
        padding: '12px 29px',
        backgroundColor: '#F9A51A',
        borderRadius: '5px',
    }
    return (
        <Navbar expand="lg">
            <Navbar.Brand href="#home">
                <img
                    src={logo}
                    width="150"
                    height="70"
                    className="d-inline-block align-top"
                    alt=""
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Form inline className="ml-auto" style={formStyle}>
                    <Button variant="outline-light" style={btnStyle}><FontAwesomeIcon icon={faSearch} /></Button>
                    <FormControl type="text" placeholder="Search Your Destination" style={searchBoxStyle} />
                </Form>
                <Nav className="ml-auto">
                    <Nav.Link href="#news" className='text-light mr-4'>News</Nav.Link>
                    <Nav.Link href="#destination" className='text-light mr-4'>Destination</Nav.Link>
                    <Nav.Link href="#blog" className='text-light mr-4'>Blog</Nav.Link>
                    <Nav.Link href="#contact" className='text-light mr-4'>Contact</Nav.Link>
                    <Nav.Link style={loginBtnStyle} className='text-light'>Login</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navigation;