import React, { Component } from 'react';
import './css/components.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
class HomeFooter extends Component {
  render() {
    return (

      <div>
        <footer class="bg-dark py-5">
          <Container>
            <div class="small text-center text-muted">Copyright &copy; 2019 - Quiz4All - Asmaa Mirkhan</div>
          </Container>
        </footer>

      </div>
    );
  }
}

export default HomeFooter;
