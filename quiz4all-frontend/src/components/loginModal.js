/*
 @author: Asmaa ~ 2019 
*/
import React, { Component } from 'react';
import './css/components.css';
import { Modal, Button, Form, Col, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { setCookie } from 'react-simple-cookie-store';

class LoginModal extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      showAlert: false,
      show: false,
      email: '',
      pwd: ''
    };

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePwd = this.handlePwd.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

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

      <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Form>
          <Modal.Body>
            <div id='formContent'>
              <Form.Row>
                <Form.Group as={Col} controlId="formEmail" required>
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="example@mail.com" onChange={this.handleEmail} />
                </Form.Group>
              </Form.Row>

              <Form.Group controlId="formPass">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" onChange={this.handlePwd} />
              </Form.Group>

              <Alert variant="primary" show={this.state.showAlert} id='modalAlert' />
            </div>


          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose} >
              Close
            </Button>
            <Button variant="primary" type="submit" onClick={this.handleSubmit} id='signupBut'>
              Login
            </Button>
          </Modal.Footer>

        </Form>
      </Modal>

    );
  }
}


export default LoginModal;
