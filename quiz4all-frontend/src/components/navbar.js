import React, { Component } from 'react';
import './css/components.css';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './css/creative.css';

class NavBar extends Component {
  render() {
    return (

      <div>
        <Navbar fixed='top' className="navbar navbar-light fixed-top py-3" id="mainNav" expand="lg">
          <Navbar.Brand href="#home" className="js-scroll-trigger">Quiz4All</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="ml-auto my-2 my-lg-0">
              <div>
                <ul className="navbar-nav ml-auto my-2 my-lg-0">
                  <li className="nav-item">
                    <a className="nav-link " href="#about">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#services">Services</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
                  </li>
                </ul>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>

    );
  }
}

export default NavBar;
