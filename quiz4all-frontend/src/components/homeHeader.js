import React, { Component } from 'react';
import './css/components.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import SignModal from './signModal';
import StudentModal from './studentModal';
import { FaGraduationCap, FaClipboardList } from "react-icons/fa";
class HomeHeader extends Component {

  signUpModalRef = ({ handleShow }) => {
    this.showSignModal = handleShow;
  }

  onSignUpClick = () => {
    this.showSignModal();
  }

  loginModalRef = ({ handleShow }) => {
    this.showModal = handleShow;
  }

  onLoginClick = () => {
    this.showModal();
  }

  render() {
    return (
      <div>
        <header class="masthead">
          <SignModal ref={this.signUpModalRef} ></SignModal>
          <StudentModal ref={this.loginModalRef} ></StudentModal>

          <Container className='h-100'>
            <Row className=" h-100 align-items-center justify-content-center text-center">
              <Col lg={10} className="align-self-end">
                <h1 class="text-uppercase text-white font-weight-bold">Quiz4All an integrated system for quizzes</h1>
                <hr class="divider my-4" />
              </Col>
              <Col lg={8} className="align-self-baseline">
                <p class="text-white-75 font-weight-light mb-5">Quiz4All is an online tool developed by&nbsp;
                <a href="https://www.linkedin.com/in/asmaa-mirkhan/">Asmaa</a>
                  &nbsp;to help professors make quizzes easily <br />
                  In another hand it is easy-to-use for students </p>

                <Button size='xl' variant="primary" onClick={this.onSignUpClick}>
                  <FaGraduationCap size='25' /> Sign up as a professor!
                </Button>
                <Button size='xl' variant="secondary" onClick={this.onLoginClick}>
                  <FaClipboardList size='25' /> I have a quiz!
                </Button>

              </Col>
            </Row>
          </Container>
        </header>
      </div>
    );
  }
}

export default HomeHeader;
