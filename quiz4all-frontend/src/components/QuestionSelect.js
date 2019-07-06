/*
 @author: Asmaa ~ 2019 
*/
import React, { Component } from 'react';
import { Typography, Layout, Menu, Dropdown, Icon, Button } from 'antd';
const { Content } = Layout;
const { Title } = Typography;
const menu = (
  <Menu>
    <Menu.Item key="0">
      1st item
    </Menu.Item>
    <Menu.Item key="1">
      2nd item
    </Menu.Item>
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);
class QuestionSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionText: 'Lorem ipsum',
    }
  }

  componentDidMount() {
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
          <Title level={3}>3) Drop Down Menu: a question with single true answer shown as a list</Title>
          <p>Question: {this.state.questionText}</p>
          <Dropdown overlay={menu}>
            <Button>
              Button <Icon type="down" />
            </Button>
          </Dropdown>
        </Content>

      </div>

    );
  }
}

export default QuestionSelect;
