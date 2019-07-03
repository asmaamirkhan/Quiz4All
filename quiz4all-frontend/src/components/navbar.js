/*
 @author: Asmaa ~ 2019 
*/
import React, { Component } from 'react';
import './css/components.css';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './css/creative.css';
import LoginModal from './loginModal';
import { getCookie, removeCookie } from 'react-simple-cookie-store';
import axios from 'axios';
class NavBar extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      logged: false
    }
  }
  componentDidMount() {
    axios.post('http://localhost:3000/verify', {}, { headers: { token: getCookie('SessionID') } })
      .then((response) => {
        if (!(response.data.status)) {
          removeCookie('SessionID');
          this.setState({ logged: false })
        } else {
          this.setState({ logged: true })
        }

        console.log(response)
      })
      .catch(function (error) {

        console.log(error);
      });

  }
  loginModalRef = ({ handleShow }) => {
    this.showModal = handleShow;
  }

  onLoginClick = () => {
    this.showModal();
  }

  logout = () => {
    removeCookie('SessionID');
    window.location.href = "/";
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
              <Nav.Link style={{ color: '#dee2e6', display: this.state.logged ? 'none' : 'block' }} onClick={this.onLoginClick}>Login</Nav.Link>
              <Nav.Link href={'/Home'} style={{ color: '#dee2e6', display: this.state.logged ? 'block' : 'none' }}>
                Profile
              </Nav.Link>
              <Nav.Link onClick={() => {this.logout()}} style={{ color: '#dee2e6', display: this.state.logged ? 'block' : 'none' }}>
                Logout
              </Nav.Link>
              <Nav.Link style={{ color: '#dee2e6' }}>About</Nav.Link >
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
