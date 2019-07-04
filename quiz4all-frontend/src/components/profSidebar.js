/*
 @author: Asmaa ~ 2019 
*/
import React, { Component } from 'react';
import './css/components.css';
import 'bootstrap/dist/css/bootstrap.css';
import './css/creative.css';
import './css/sidebar.css';
import { Link } from "react-router-dom";
import axios from 'axios';
import { getCookie, removeCookie } from 'react-simple-cookie-store';
class ProfSidebar extends Component {

  componentDidMount() {
    axios.post('http://localhost:3000/verify', {}, { headers: { token: getCookie('SessionID') } })
      .then((response) => {
        if (!(response.data.status)) {
          removeCookie('SessionID');
          window.location.href = "/";
        }

        console.log(response)
      })
      .catch(function (error) {

        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <div className="sidebar">
          <Link to={'/home'}>
            <p className="active">Last quizes</p>
          </Link>
          <Link to={'/home'}>
            <p>New quiz</p>
          </Link>
          <Link to={'/guide'}>
            <p>Component Guide</p>
          </Link>
          <Link to={'/home'}>
            <p>Profile</p>
          </Link>
        </div>
        
      </div>

    );
  }
}

export default ProfSidebar;
