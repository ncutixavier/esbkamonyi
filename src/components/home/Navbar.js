import React, { useState } from 'react';
import { Link } from "react-scroll"
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
} from 'reactstrap'
import logo from '../../assets/img/esb_logo.jpg'
import '../../assets/scss/home.scss'

const NavigationBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <Navbar fixed="top" light expand="md">
                <NavbarBrand href='/'>
                    <img src={logo} alt="logo" />
                </NavbarBrand>

                <NavbarToggler onClick={toggle} />
                
                <Collapse isOpen={isOpen} navbar>
                    <Nav className='mr-auto' navbar>
                        <NavItem>
                            <Link
                                className="nav-link"
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={1000}>
                                Home
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link
                                className="nav-link"
                                to="staff"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={1000}>
                                Staff
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link
                                className="nav-link"
                                to="news"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={1000}>
                                News
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link
                                className="nav-link"
                                to="announcement"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={1000}>
                                Announcements
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link
                                className="nav-link"
                                to="gallery"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={1000}>
                                Gallery
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link
                                className="nav-link"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={1000}>
                                About
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link
                                className="nav-link"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={1000}>
                                Contact
                            </Link>
                        </NavItem>
                        </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default NavigationBar;
