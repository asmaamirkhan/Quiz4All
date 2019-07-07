/*
 @author: Asmaa ~ 2019 
*/
import React, { Component } from 'react';
import { Typography, Layout, Checkbox, Radio, Dropdown, Button, Icon, Menu, Input } from 'antd';
const { Content } = Layout;
const { Title } = Typography;
const { TextArea } = Input;
class ProfessorGuideContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionText: 'Lorem ipsum',
      options: ['Apple', 'Pear', 'Orange']
    }
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
          <Title level={3}>1) Multiple choices: a question with multiple correct answers:</Title>
          <p>Question: {this.state.questionText}</p>
          <Checkbox.Group options={this.state.options} defaultValue={['Apple']} onChange={this.onChange} />
        </Content>


        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            background: '#fff',
            height: 'auto',
            minHeight: 'auto'
          }}
        >
          <Title level={3}>2) Multiple choices: a question with single correct answer:</Title>
          <p>Question: {this.state.questionText}</p>
          <Radio.Group options={this.state.options} onChange={this.onChange} value={this.state.value} />
        </Content>


        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            background: '#fff',
            height: 'auto',
            minHeight: 'auto'
          }}
        >
          <Title level={3}>3) Drop Down Menu: a question with single correct answer shown as a list</Title>
          <p>Question: {this.state.questionText}</p>
          <Dropdown overlay={menu}>
            <Button>
              Select One <Icon type="down" />
            </Button>
          </Dropdown>
        </Content>


        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            background: '#fff',
            height: 'auto',
            minHeight: 'auto'
          }}
        >
          <Title level={3}>5) Long answer question: the answer is a paragraph</Title>
          <p>Question: {this.state.questionText}</p>
          <TextArea
            placeholder="Long answer"
            autosize={{ minRows: 2, maxRows: 6 }}
          />
        </Content>


        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            background: '#fff',
            height: 'auto',
            minHeight: 'auto'
          }}
        >
          <Title level={3}>4) Short answer question: the answer has few words</Title>
          <p>Question: {this.state.questionText}</p>
          <Input placeholder="Answer ..." />
        </Content>

      </div>

    );
  }
}
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
export default ProfessorGuideContent;
