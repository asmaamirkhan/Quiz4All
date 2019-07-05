/*
 @author: Asmaa ~ 2019 
*/
import React, { Component } from 'react';
import './css/components.css';

import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu, Icon } from 'antd';
const { Header } = Layout;
class ProfNavbar extends Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

 

  render() {
    return (
      <div>
         <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
            <Menu
              mode="horizontal"
              style={{ float: 'right', lineHeight: '64px' }}
            >
              <Menu.Item key="1"><Icon type="logout" />Logout</Menu.Item>

            </Menu>
          </Header>
      </div>

    );
  }
}

export default ProfNavbar;
