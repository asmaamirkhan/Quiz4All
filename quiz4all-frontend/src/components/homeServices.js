import React, { Component } from 'react';
import './css/components.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { FaLaptopCode, FaRegHeart } from "react-icons/fa";
import { GoRepoForked } from "react-icons/go";
class HomeServices extends Component {
  render() {
    return (

      <div>
        <section class="page-section" id="services">
          <Container>
            <h2 class="text-center mt-0">Features</h2>
            <hr class="divider my-4" />
            <Row >
              <Col lg={4} md={4} className="text-center">
                <div class="mt-5">
                  <FaLaptopCode className="text-primary" size='100px'/>
                  <h3 class="mb-2">Stable System</h3>
                  <p class="text-muted mb-0">The tool is updated regularly to keep it bug free!</p>
                </div>
              </Col>
              <Col lg={4} md={4} className="text-center">
                <div class="mt-5">
                  <GoRepoForked className="text-primary" size='100px'/>
                  <h3 class="mb-2">Open Source</h3>
                  <p class="text-muted mb-0">Codes are available on <a href='https://github.com/asmaamirkhan/quiz4all'>github</a> and ready to use</p>
                </div>
              </Col>
              <Col lg={4} md={4} className="text-center">
                <div class="mt-5">
                  <FaRegHeart className="text-primary" size='100px'/>
                  <h3 class="mb-2">Made with Love</h3>
                  <p class="text-muted mb-0">The tool is made with love by Asmaa</p>
                </div>
              </Col>
              
              
            </Row>
          </Container>
        </section>
      </div>
    );
  }
}

export default HomeServices;
