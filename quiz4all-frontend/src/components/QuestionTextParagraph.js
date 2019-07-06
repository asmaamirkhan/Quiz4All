/*
 @author: Asmaa ~ 2019 
*/
import React, { Component } from 'react';

import { Typography, Layout, Input  } from 'antd';
const { Content } = Layout;
const { Title } = Typography;
const { TextArea } = Input;

class QuestionTextParagraph extends Component {
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
          <Title level={3}>5) Long answer question: the answer is a paragraph</Title>
          <p>Question: {this.state.questionText}</p>
          
          <TextArea
            placeholder="Long answer"
            autosize={{ minRows: 2, maxRows: 6 }}
          />
        </Content>


      </div>

    );
  }
}

export default QuestionTextParagraph;
