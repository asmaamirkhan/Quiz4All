import React, { Component } from 'react';
import './css/components.css';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

class HomeContact extends Component {
  render() {
    return (

      <div>
        <section className="page-section" id="services">
          <Container>
            <h2 className="text-center mt-0">For Contact</h2>
            <hr className="divider my-4" />
            <Row >
              <Col lg={6} md={6} className="text-center">
                <div className="mt-5">
                  <a href='https://www.linkedin.com/in/asmaa-mirkhan/'>
                    <FaLinkedin className="text-primary" size='50px' />
                  </a>
                </div>
              </Col>
              <Col lg={6} md={6} className="text-center">
                <div className="mt-5">
                  <a href='mailto:asmaamirkhan.am@gmail.com'>
                    <FaEnvelope className="text-primary" size='50px' />
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
      
    );
  }
}

export default HomeContact;
