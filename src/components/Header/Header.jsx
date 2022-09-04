import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../Images/logo.png';
import './Header.css';
import { BiHomeAlt } from "react-icons/bi";
import avater from '../../Images/avater.png';
import { IoIosArrowDown } from "react-icons/io";
import { BsChatDots } from "react-icons/bs";
import { AiOutlineBell } from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi";

function Header() {
    return (
        <Navbar expand="lg" collapseOnSelect >
            <Container fluid>
                <Navbar.Brand href="#">
                    <img src={logo} alt="logo" className='logo img-fluid' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <input
                        className='search-input'
                        type="text"
                        placeholder='Search...' />

                    <Nav className="mx-auto" >
                        <Nav.Link href="#action1"><BiHomeAlt size='1.8rem' color='white' className='nav-icon' /></Nav.Link>
                        <Nav.Link href="#action1"><HiUserGroup size='1.8rem' color='white' className='nav-icon' /></Nav.Link>
                        <Nav.Link href="#action1"><AiOutlineBell size='1.8rem' color='white' className='nav-icon' /></Nav.Link>
                        <Nav.Link href="#action1"><BsChatDots size='1.8rem' color='white' className='nav-icon' /></Nav.Link>
                        <h5 style={{ color: 'white', padding: '5px', borderRadius: "5px", marginLeft: '10px' }}>
                            <img src={avater} alt="user"
                                style={{ width: "30px", borderRadius: "50%", color: 'white' }}
                            />  Rajon Ahmed<IoIosArrowDown size='0.8rem' />
                        </h5>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header