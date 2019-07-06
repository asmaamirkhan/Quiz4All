/*
 @author: Asmaa ~ 2019 
*/
import React, { Component } from 'react';
import axios from 'axios';

import { Modal, Form, Input, Icon, Alert } from 'antd';
import 'antd/dist/antd.css';

class SignModal extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      vis: false,
      showAlert: false,
      alertType: 'error',
      name: '',
      email: '',
      uni: '',
      pwd: '',
    };
    this.showModal = this.showModal.bind(this)
    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleUni = this.handleUni.bind(this);
    this.handlePwd = this.handlePwd.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkEmptyFields = this.checkEmptyFields.bind(this);
  }

  showModal() {
    console.log(this.state)
    this.setState({
      vis: true,
      alertMessage: ""
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      vis: false,
    });
  };


  handleName(event) {
    this.setState({ name: event.target.value });
    if ((event.target.value).trim() !== '')
      event.target.style['borderColor'] = '#ced4da'
  }

  handleEmail(event) {
    this.setState({ email: event.target.value });
    if ((event.target.value).trim() !== '')
      event.target.style['borderColor'] = '#ced4da'
  }

  handleUni(event) {
    this.setState({ uni: event.target.value });
    if ((event.target.value).trim() !== '')
      event.target.style['borderColor'] = '#ced4da'
  }

  handlePwd(event) {
    this.setState({ pwd: event.target.value });
    if ((event.target.value).trim() !== '')
      event.target.style['borderColor'] = '#ced4da'
  }

  async checkEmptyFields(event) {

    this.setState({ showAlert: false });
    if ((this.state.name).trim() === '') {
      document.getElementById("formFullName").style["border-color"] = "#F24516";
      this.setState({ showAlert: true });
    }
    if ((this.state.email).trim() === '') {
      document.getElementById("formEmail").style["border-color"] = "#F24516";
      this.setState({ showAlert: true });
    }
    if ((this.state.uni).trim() === '') {
      document.getElementById("formUni").style["border-color"] = "#F24516";
      this.setState({ showAlert: true });
    }
    if ((this.state.pwd).trim() === '') {
      document.getElementById("formPass").style["border-color"] = "#F24516";
      this.setState({ showAlert: true });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.checkEmptyFields().then(() => {
      if (this.state.showAlert === false) {
        axios.post('http://localhost:3000/access?process=signup', {
          name: this.state.name,
          email: this.state.email,
          university: this.state.uni,
          password: this.state.pwd
        })
          .then((response) => {
            if (response.data.status === false) {
              this.setState({ showAlert: true, alertType: 'error' });
              this.setState({ alertMessage: response.data.message })
            } else {
              this.setState({ showAlert: true, alertType: 'success', alertMessage: 'You signed up successfully!' })
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      } else {
        this.setState({ alertMessage: 'All fields are required' });
      }
    }
    )
  }

  render() {
    return (

      <Modal
        title="Basic Modal"
        visible={this.state.vis}
        okText="Sign Up"
        onOk={this.handleSubmit}
        onCancel={this.handleCancel}
      >
        <Form className="login-form">
          <Form.Item >
            <Input
              id="formFullName"
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Full Name" size="large" onChange={this.handleName}
            />
          </Form.Item>

          <Form.Item>
            <Input
              id="formEmail"
              prefix={<Icon type="form" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Email" size="large" onChange={this.handleEmail}
            />
          </Form.Item>

          <Form.Item>
            <Input
              id="formUni"
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="University" size="large" onChange={this.handleUni}
            />
          </Form.Item>

          <Form.Item>
            <Input
              id="formPass"
              prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password" size="large" onChange={this.handlePwd}
            />
          </Form.Item>
        </Form>
        <Alert
          style={{ display: this.state.showAlert ? 'block' : 'none' }} id='modalAlert'
          message="Error"
          description={this.state.alertMessage}
          type={this.state.alertType}
          showIcon
        />
      </Modal>

    );
  }
}


export default SignModal;
