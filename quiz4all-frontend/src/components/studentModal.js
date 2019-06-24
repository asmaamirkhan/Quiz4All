import React, { Component } from 'react';
import './css/components.css';
import { Modal, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

class StudentModal extends React.Component {
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
          <Modal.Title>Find a quiz</Modal.Title>
        </Modal.Header>
        <Form>
          <Modal.Body>
            
            <Form.Group controlId="studentCode">
              <Form.Label>Enter quiz code given by your instructor:</Form.Label>
              <Form.Control placeholder="7X@14D" />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button type = "submit" variant="primary" onClick={this.handleClose}>
              Find
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>

    );
  }
}


export default StudentModal;
