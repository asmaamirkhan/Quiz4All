import React, { Component } from 'react';
import './css/components.css';
import { Modal, Button, Form, Col, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

class SignModal extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      showAlert: false,
      show: false,
      name: '',
      email: '',
      uni: '',
      pwd: '',
    };

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleUni = this.handleUni.bind(this);
    this.handlePwd = this.handlePwd.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkEmptyFields = this.checkEmptyFields.bind(this);
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

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
              this.setState({ showAlert: true });
              document.getElementById('modalAlert').innerHTML = response.data.message;
            } else {
              document.getElementById('formContent').style['display'] = 'none';
              document.getElementById('confirmationContent').style['display'] = 'inline';
              document.getElementById('signupBut').style['display'] = 'none';
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      } else {
        document.getElementById('modalAlert').innerHTML = 'All fields are required';
      }
    }
    )
  }

  render() {
    return (

      <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Signup</Modal.Title>
        </Modal.Header>
        <Form>
          <Modal.Body>
            <div id='formContent'>
              <Form.Row>
                <Form.Group as={Col} controlId="formFullName" required>
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control placeholder="Full name .." onChange={this.handleName} />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="example@mail.com" onChange={this.handleEmail} />
                </Form.Group>

                <Form.Group as={Col} controlId="formUni">
                  <Form.Label>University</Form.Label>
                  <Form.Control placeholder="University name.." onChange={this.handleUni} />
                </Form.Group>
              </Form.Row>

              <Form.Group controlId="formPass">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" onChange={this.handlePwd} />
              </Form.Group>

              <Alert variant="primary" show={this.state.showAlert} id='modalAlert' />
            </div>

            <div id='confirmationContent' style={{ display: 'none' }}>
              <Alert variant="success">
                Signed up successfully!
              </Alert>
            </div>

          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose} >
              Close
            </Button>
            <Button variant="primary" type="submit" onClick={this.handleSubmit} id='signupBut'>
              Signup
            </Button>
          </Modal.Footer>

        </Form>
      </Modal>

    );
  }
}


export default SignModal;
