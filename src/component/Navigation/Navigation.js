import React, { useContext, useState } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import logo from '../../image/Group1330.png';
import blackLogo from '../../image/Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Navigation.css'
import { Link, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';

const Navigation = () => {
    const location = useLocation();
    const { pathname } = location;
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [changingNav, setChangingNav] = useState(false);// This state is declare for change nav item color
    if (pathname === "/login" ||
        pathname === "/booking/hotel/Sreemongol" ||
        pathname === "/booking/hotel/Sajek" ||
        pathname === "/booking/hotel/Sundorbon") {
        if (!changingNav) {
            setChangingNav(true)
        }
    }


    const formStyle = {
        border: '1px solid white',
        background: 'rgba(255, 255, 255, 0.2)',
        borderRadius: '7px',
        width: 300,
        height: 44

    }
    const loginBtnStyle = {
        padding: '12px 29px',
        backgroundColor: '#F9A51A',
        borderRadius: '5px',
    }
    return (
        <Container>
            <Navbar expand="lg">
                <Link to="/home">
                    <Navbar.Brand>
                        <img
                            src={changingNav ? blackLogo : logo}
                            width="150"
                            height="70"
                            className="d-inline-block align-top"
                            alt=""
                        />
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    {!changingNav && <Form inline className="ml-auto" style={formStyle}>
                        <button className="search-btn"><FontAwesomeIcon icon={faSearch} /></button>
                        <input className="searchBox" type="text" name="search" placeholder="Search Your Destination.." />
                    </Form>}
                    <Nav className="ml-auto">
                        <Nav.Link href="#news" className={changingNav ? "text-dark ml-3" : "text-white ml-3"}>
                            News
                        </Nav.Link>
                        <Nav.Link href="#destination" className={changingNav ? "text-dark ml-3" : "text-white ml-3"}>
                            Destination
                        </Nav.Link>
                        <Nav.Link href="#blog" className={changingNav ? "text-dark ml-3" : "text-white ml-3"}>
                            Blog
                        </Nav.Link>
                        <Nav.Link href="#contact" className={changingNav ? "text-dark ml-3" : "text-white ml-3"}>
                            Contact
                        </Nav.Link>
                        {loggedInUser && <Nav.Link>{loggedInUser.name}</Nav.Link>}
                        {!loggedInUser.email && < Nav.Link href="/login" style={loginBtnStyle} className='text-dark ml-3'>Login</Nav.Link>}

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container >
    );
};

export default Navigation;