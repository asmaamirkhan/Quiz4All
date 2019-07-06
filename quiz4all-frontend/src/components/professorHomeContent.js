/*
 @author: Asmaa ~ 2019 
*/
import React, { Component } from 'react';
import axios from 'axios';
import { getCookie } from 'react-simple-cookie-store';

import 'antd/dist/antd.css';
import './index.css';
import { Layout, Table } from 'antd';
const { Content } = Layout;
const { Column } = Table;
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
          response.data.data.forEach((item, key) => {
            item['COUNT'] = key + 1;
          })
          this.setState({ quizes: response.data.data });
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
          <Table bordered={true} dataSource={this.state.quizes} pagination={{ pageSize: 7 }} scroll={{ x: 400 }} >
            <Column title="#" dataIndex='COUNT' />
            <Column title="Quiz Code" dataIndex="CODE" />
            <Column title="Email Ex." dataIndex="EMAIL_CONST" />
            <Column title="Student Number" dataIndex="STD_COUNT" />
            <Column title="Activation Time" dataIndex="ACTIVATION_TIME" />
            <Column title="End Time" dataIndex="END_TIME" />
          </Table>
        </Content>
      </div>
    );
  }
}

export default ProfessorHomeContent;
