import React, { Component } from 'react';
import './css/components.css';
import { Modal, Button, Form, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

class StudentModal extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      showAlert: false,
      show: false,
      quizCode: ''
    };

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleQuizCode = this.handleQuizCode.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkEmptyFields = this.checkEmptyFields.bind(this);
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

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
              this.setState({ showAlert: true });
              document.getElementById('modalAlert').innerHTML = response.data.message;
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

      <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Find a quiz</Modal.Title>
        </Modal.Header>
        <Form>
          <Modal.Body>

            <Form.Group controlId="quizCode">
              <Form.Label>Enter quiz code given by your instructor:</Form.Label>
              <Form.Control placeholder="Ex: 7X@14D" onChange={this.handleQuizCode} />
            </Form.Group>
            <Alert variant="primary" show={this.state.showAlert} id='modalAlert' />
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit" variant="primary" onClick={this.handleSubmit}>
              Find
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>

    );
  }
}

export default StudentModal;
