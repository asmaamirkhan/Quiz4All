/*
 @author: Asmaa ~ 2019 
*/
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { getCookie, removeCookie } from 'react-simple-cookie-store';
import 'antd/dist/antd.css';
import './index.css';
import { Menu, Icon  } from 'antd';
class ProfSidebar extends Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  componentDidMount() {
    axios.post('http://localhost:3000/verify', {}, { headers: { token: getCookie('SessionID') } })
      .then((response) => {
        if (!(response.data.status)) {
          removeCookie('SessionID');
          window.location.href = "/";
        }

        console.log(response)
      })
      .catch(function (error) {

        console.log(error);
      });
  }

  render() {
    return (
      <div>
       <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          
            <Menu.Item key="1" href='/homev2'>
              
              <Icon type="clock-circle" />
               <span>Last Quizes</span>
               <Link to="/home" />
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="plus-circle" />
              <span>New Quiz</span>
              <Link to="/newQuiz" />
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="question-circle" />
              <span>Question Guide</span>
              <Link to="/guide" />
            </Menu.Item>
          </Menu>
      </div>

    );
  }
}

export default ProfSidebar;
