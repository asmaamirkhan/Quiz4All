import React, { Component } from 'react';
import './css/components.css';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './css/creative.css';
import './css/sidebar.css';
class ProfNavbar extends Component {



  render() {
    return (
      <div>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="#home">Quiz4All</Navbar.Brand>
          <Nav className="ml-auto my-2 my-lg-0">
            <Nav.Link href="#logout">Logout</Nav.Link>
          </Nav>
        </Navbar>
        <div id="sidebar-wrapper" class="sidebar-toggle">
			<ul class="sidebar-nav">
		    	<li>
		      		<a href="#item1">Item 1</a>
		    	</li>
		    	<li>
		      		<a href="#item2">Item 2</a>
		    	</li>
		    	<li>
		      		<a href="#item3">Item 3</a>
		    	</li>
		  	</ul>
		</div>
      </div>
      
    );
  }
}

export default ProfNavbar;
