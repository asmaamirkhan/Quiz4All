/*
 @author: Asmaa ~ 2019 
*/
import React, { Component } from 'react';
import './css/components.css';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

class HomeFooter extends Component {
  render() {
    return (

      <div>
        <footer className="bg-dark py-5">
          <Container>
            <div className="small text-center text-muted">Copyright &copy; 2019 - Quiz4All - Asmaa Mirkhan</div>
          </Container>
        </footer>
      </div>
      
    );
  }
}

export default HomeFooter;
