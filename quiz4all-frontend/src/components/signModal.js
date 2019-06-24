import React, { Component } from 'react';
import './css/components.css';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

class SignModal extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (

      <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Signup</Modal.Title>
        </Modal.Header>
        <Form>
          <Modal.Body>

            <Form.Row>
              <Form.Group as={Col} controlId="formFirstName" required>
                <Form.Label>First Name</Form.Label>
                <Form.Control placeholder="First Name.." />
              </Form.Group>

              <Form.Group as={Col} controlId="formLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control placeholder="Last Name.." />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="example@mail.com" />
              </Form.Group>

              <Form.Group as={Col} controlId="formUni">
                <Form.Label>University</Form.Label>
                <Form.Control placeholder="University name.." />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formPass">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" />
            </Form.Group>


          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit" onClick={this.handleClose}>
              Signup
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>

    );
  }
}


export default SignModal;
