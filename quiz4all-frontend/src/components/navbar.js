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
      logged: false,
      color: 'none'
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
      document.addEventListener('scroll', () => {
        const isTop = window.scrollY > 25;
        if (isTop) {
            this.setState({ color:'primary' })
        }else{
          this.setState({ color:'none' })
        }
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
        <Navbar bg={this.state.color} fixed='top'className="navbar py-3" id="mainNav" expand="lg">
          <Navbar.Brand href="/" className="js-scroll-trigger">Quiz4All</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="ml-auto my-2 my-lg-0">
              <Nav.Link style={{ color: 'white', display: this.state.logged ? 'none' : 'block' }} onClick={this.onLoginClick}>Login</Nav.Link>
              <Nav.Link href={'/Home'} style={{ color: 'white', display: this.state.logged ? 'block' : 'none' }}>
                Profile
              </Nav.Link>
              <Nav.Link onClick={() => {this.logout()}} style={{ color: 'white', display: this.state.logged ? 'block' : 'none' }}>
                Logout
              </Nav.Link>
              <Nav.Link style={{ color: 'white', }}>About</Nav.Link >
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
