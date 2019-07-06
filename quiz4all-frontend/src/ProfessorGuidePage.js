/*
 @author: Asmaa ~ 2019 
*/
import React, { Component } from 'react';
import ProfSidebar from './components/profSidebar';
import ProfessorGuideContent from './components/professorGuideContent';
import 'antd/dist/antd.css';

import { removeCookie } from 'react-simple-cookie-store';
import { Layout, Menu, Icon } from 'antd';
const { Header, Sider, Footer } = Layout;

class ProfessorGuidePage extends Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  logout = () => {
    removeCookie('SessionID');
    window.location.href = "/";
  }
  render() {
    return (

      <div style={{ height: '100%' }}>
        <Layout style={{ height: '100%' }}>
          <Sider trigger={null} collapsible collapsed={this.state.collapsed} >
            <ProfSidebar />
          </Sider>
          <Layout >
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
                <Menu.Item key="1" onClick={this.logout}><Icon type="logout" />Logout</Menu.Item>
              </Menu>
            </Header>
            <ProfessorGuideContent />
            <Footer style={{ textAlign: 'center' }}>Quiz4All ©2019 Developed by Asmaa</Footer>
          </Layout>
        </Layout>
      </div>

    );
  }
}


export default ProfessorGuidePage;
