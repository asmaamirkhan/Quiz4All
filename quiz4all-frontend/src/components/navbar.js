import React, { Component } from 'react';
import './css/components.css';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './css/creative.css';
import LoginModal from './loginModal';
class NavBar extends Component {

  loginModalRef = ({ handleShow }) => {
    this.showModal = handleShow;
  }
  
  onLoginClick = () => {
    this.showModal();
  }

  render() {
    return (
      <div>
        <LoginModal ref={this.loginModalRef} ></LoginModal>
        <Navbar fixed='top' className="navbar navbar-light fixed-top py-3" id="mainNav" expand="lg">
          <Navbar.Brand href="#home" className="js-scroll-trigger">Quiz4All</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="ml-auto my-2 my-lg-0">
              <Nav.Link style={{ color: '#dee2e6' }} onClick={this.onLoginClick}>Login</Nav.Link>
              <Nav.Link style={{ color: '#dee2e6' }}>About</Nav.Link >
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
