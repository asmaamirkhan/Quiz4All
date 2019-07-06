/*
 @author: Asmaa ~ 2019 
*/
import React, { Component } from 'react';
import { setCookie } from 'react-simple-cookie-store';
import { Modal, Form, Input, Icon } from 'antd';

import 'antd/dist/antd.css';
import axios from 'axios';

class LoginModal extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      showAlert: false,
      visible: false,
      email: '', 
      pwd: ''
    };
    this.showModal = this.showModal.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePwd = this.handlePwd.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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


  handleEmail(event) {
    this.setState({ email: event.target.value });
    if ((event.target.value).trim() !== '')
      event.target.style['borderColor'] = '#ced4da'
  }

  handlePwd(event) {
    this.setState({ pwd: event.target.value });
    if ((event.target.value).trim() !== '')
      event.target.style['borderColor'] = '#ced4da'
  }



  handleSubmit(event) {
    event.preventDefault();

    axios.post('http://localhost:3000/access?process=login', {
      email: this.state.email,
      password: this.state.pwd
    })
      .then((response) => {
        if (!(response.data.status)) {
          this.setState({ showAlert: true });
          document.getElementById('modalAlert').innerHTML = response.data.message;
        }
        setCookie('SessionID', response.data.data, 30);
        window.location.href = "/Home";
        console.log(response)
      })
      .catch(function (error) {

        console.log(error);
      });



  }

  render() {
    return (
      <Modal
        title="Basic Modal"
        visible={this.state.visible}
        okText="Login"
        onOk={this.handleSubmit}
        onCancel={this.handleCancel}
      >
        <Form className="login-form">
          <Form.Item>

            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Email" size="large" onChange={this.handleEmail}
            />

          </Form.Item>
          <Form.Item>

            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password" size="large" onChange={this.handlePwd}
            />

          </Form.Item>
        </Form>
      </Modal>

    );
  }
}


export default LoginModal;
