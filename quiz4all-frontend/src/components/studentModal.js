/*
 @author: Asmaa ~ 2019 
*/
import React, { Component } from 'react';
import axios from 'axios';
import { Modal, Form, Input, Icon, Alert } from 'antd';
import 'antd/dist/antd.css';

class StudentModal extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      showAlert: false,
      visible: false,
      quizCode: ''
    };

    this.showModal = this.showModal.bind(this);
    this.handleQuizCode = this.handleQuizCode.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkEmptyFields = this.checkEmptyFields.bind(this);
  }

  showModal() {
    this.setState({
      visible: true,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleQuizCode(event) {
    this.setState({ quizCode: event.target.value });
  }

  async checkEmptyFields(event) {

    this.setState({ showAlert: false });
    if ((this.state.quizCode).trim() === '') {
      document.getElementById("quizCode").style["border-color"] = "#F24516";
      this.setState({ showAlert: true });
    }

  }

  handleSubmit(event) {
    event.preventDefault();
    this.checkEmptyFields().then(() => {
      if (this.state.showAlert === false) {
        axios.post('http://localhost:3000/quiz?process=find', {
          quizCode: this.state.quizCode,
        })
          .then((response) => {
            if (response.data.status === false) {
              this.setState({ showAlert: true, alertMessage: response.data.message });

            } else {
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      } else {
        document.getElementById('modalAlert').innerHTML = 'Enter the code please';
      }
    }
    )
  }

  render() {
    return (

      <Modal
        title="Find a quiz"
        visible={this.state.visible}
        okText="Find"
        onOk={this.handleSubmit}
        onCancel={this.handleCancel}
      >
        <Form className="login-form">
          <Form.Item>

            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Ex: 7X@14D" onChange={this.handleQuizCode}size="large" 
            />

          </Form.Item>
          <Alert
          style={{ display: this.state.showAlert ? 'block' : 'none' }} id='modalAlert'
          message="Error"
          description={this.state.alertMessage}
          type={this.state.alertType}
          showIcon
        />
        </Form>
      </Modal>

    );
  }
}

export default StudentModal;
