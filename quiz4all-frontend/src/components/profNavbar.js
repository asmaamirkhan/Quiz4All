/*
 @author: Asmaa ~ 2019 
*/
import React, { Component } from 'react';
import './css/components.css';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './css/creative.css';
import { getCookie, removeCookie } from 'react-simple-cookie-store';
class ProfNavbar extends Component {

  logout = () => {
    removeCookie('SessionID');
    window.location.href = "/";
  }

  render() {
    return (
      <div>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="#home">Quiz4All</Navbar.Brand>
          <Nav className="ml-auto my-2 my-lg-0">
            <Nav.Link onClick={() => {this.logout()}}>Logout</Nav.Link>
          </Nav>
        </Navbar>
      </div>

    );
  }
}

export default ProfNavbar;
