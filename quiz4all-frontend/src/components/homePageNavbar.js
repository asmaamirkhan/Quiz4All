/*
 @author: Asmaa ~ 2019 
*/
import React, { Component } from 'react';
import LoginModal from './loginModal';
import { getCookie, removeCookie } from 'react-simple-cookie-store';
import axios from 'axios';

import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';

const { Header } = Layout;

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
        this.setState({ color: 'primary' })
      } else {
        this.setState({ color: 'none' })
      }
    });
  }
  loginModalRef = ({ showModal }) => {
    this.showModal = showModal;
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
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            style={{ lineHeight: '64px', float: 'right', position:'sticky' }}
            visible={this.state.logged}
          >
          <Menu.Item onClick={() => { this.logout() }} >
              <span>Logout</span>
            </Menu.Item>
            <Menu.Item >
              <a href='/home'><span>Profile</span></a>
            </Menu.Item>
            <Menu.Item>
              <span>About</span>
            </Menu.Item>
          </Menu>
          <Menu
            theme="dark"
            mode="horizontal"
            style={{ lineHeight: '64px', float: 'right' }}
            visible={!(this.state.logged)}
          >
            <Menu.Item onClick={this.onLoginClick}>
              <span>Login</span>
            </Menu.Item>
            <Menu.Item>
              <span>About</span>
            </Menu.Item>
          </Menu>
        </Header>
      </div >
    );
  }
}

export default NavBar;
