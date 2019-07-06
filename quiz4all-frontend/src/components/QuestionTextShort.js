/*
 @author: Asmaa ~ 2019 
*/
import React, { Component } from 'react';

import { Typography, Layout, Input } from 'antd';
const { Content } = Layout;
const { Title } = Typography;

class QuestionTextShort extends Component {
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
          <Title level={3}>4) Short answer question: the answer has few words</Title>
          <p>Question: {this.state.questionText}</p>
          <Input placeholder="Answer ..." />
        </Content>
      </div>

    );
  }
}

export default QuestionTextShort;
