/*
 @author: Asmaa ~ 2019 
*/
import React, { Component } from 'react';
import { Typography, Layout, Radio } from 'antd';
const { Content } = Layout;
const { Title } = Typography;

class QuestionRadio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: ['Apple', 'Pear', 'Orange'],
      questionText: 'Lorem ipsum',
      value:''
    }
  }

  componentDidMount() {
  }


  onChange = e => {
    console.log('radio1 checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  };


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
          <Title level={3}>2) Multiple choices: a question with single true answer:</Title>
          <p>Question: {this.state.questionText}</p>
          <Radio.Group options={this.state.options} onChange={this.onChange} value={this.state.value} />
        </Content>

      </div>

    );
  }
}

export default QuestionRadio;
