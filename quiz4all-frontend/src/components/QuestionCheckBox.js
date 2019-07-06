/*
 @author: Asmaa ~ 2019 
*/
import React, { Component } from 'react';
import { Typography, Layout, Checkbox } from 'antd';
const { Content } = Layout;
const { Title } = Typography;
class QuestionCheckbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: ['Apple', 'Pear', 'Orange'],
      questionText: 'Lorem ipsum'
    }
  }


  componentDidMount() {
  }


  onChange(checkedValues) {
    console.log('checked = ', checkedValues);
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
          <Title level={3}>1) Multiple choices: a question with multiple true answers:</Title>
          <p>Question: {this.state.questionText}</p>
          <Checkbox.Group options={this.state.options} defaultValue={['Apple']} onChange={this.onChange} />

        </Content>
      </div>

    );
  }
}

export default QuestionCheckbox;
