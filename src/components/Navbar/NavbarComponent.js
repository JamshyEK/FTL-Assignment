import React, { Component } from 'react'
import {Navbar,Button,NavDropdown,Nav,Form,FormControl} from 'react-bootstrap'
import './NavbarComponent.css'

export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar bg="dark" expand="lg">
        <Navbar.Brand href="#home" id="a-link">
      <img
        alt=""
        src="assets/images/logo.png"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      FTL
    </Navbar.Brand>  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link id="a-link" href="#home">Home</Nav.Link>
      <Nav.Link id="a-link" href="#about">About Us</Nav.Link>
      <Nav.Link id="a-link" href="#contact">Contact Us</Nav.Link>
   
    </Nav>

  </Navbar.Collapse>
</Navbar>
      </>
    )
  }
}
