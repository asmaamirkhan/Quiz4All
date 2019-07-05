/*
 @author: Asmaa ~ 2019 
*/
import React, { Component } from 'react';
import axios from 'axios';
import { getCookie } from 'react-simple-cookie-store';

import 'antd/dist/antd.css';
import './index.css';
import { Layout, Table, Divider, Tag } from 'antd';
const { Content, Footer } = Layout;
const { Column, ColumnGroup } = Table;
class ProfessorHomeContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quizes: []
    }
  }


  componentDidMount() {
    axios.post('http://localhost:3000/quiz?process=getAllQuizes', {}, { headers: { token: getCookie('SessionID') } })
      .then((response) => {
        if (!(response.data.status)) {
        } else {
          this.setState({ quizes: response.data.data })
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
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            background: '#fff',
            height: 'auto',
            minHeight: 'auto'
          }}
        >
          <Table dataSource={this.state.quizes} pagination={{ pageSize: 7 }} scroll={{ x: 400 }} >
            <Column title="Quiz Code" dataIndex="CODE" key="firstName" />
            <Column title="Email Ex." dataIndex="EMAIL_CONST" key="lastName" />
            <Column title="Student Number" dataIndex="STD_COUNT" key="age" />
            <Column title="Activation Time" dataIndex="ACTIVATION_TIME" key="address" />
            <Column title="End Time" dataIndex="END_TIME" key="address" />
          </Table>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Quiz4All ©2019 Developed by Asmaa</Footer>
      </div>
    );
  }
}

export default ProfessorHomeContent;
