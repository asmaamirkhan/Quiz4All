/*
 @author: Asmaa ~ 2019 
*/
import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';
import axios from 'axios';
import { getCookie } from 'react-simple-cookie-store';
class ProfessorHomeContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quizes: []
    }
  }


  componentDidMount() {
    axios.post('http://localhost:3000/quiz?process=getAllQuizes', {}, { headers: { token: getCookie('SessionID') } })
      .then((response) => {
        if (!(response.data.status)) {
        } else {
          this.setState({ quizes: response.data.data })
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
        <div className="content">
          <h2>Last quizes</h2>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th></th>
                <th>Quiz Code</th>
                <th>Email Ex.</th>
                <th>Student Num</th>
                <th>Quiz Start Date</th>
                <th>Quiz End Date</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(this.state.quizes) && this.state.quizes.length > 0 && this.state.quizes.map((item, index) => (
                <tr >
                  <td>{index + 1}</td>
                  <td>{item['CODE']}</td>
                  <td>{item['EMAIL_CONST']}</td>
                  <td>{item['STD_COUNT']}</td>
                  <td>{item['ACTIVATION_TIME']}</td>
                  <td>{item['END_TIME']}</td>
                  <td>
                    <Button variant="primary">View</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>

    );
  }
}

export default ProfessorHomeContent;
