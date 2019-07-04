/*
 @author: Asmaa ~ 2019 
*/
import React, { Component } from 'react';
import Divider from '@material-ui/core/Divider';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormLabel from '@material-ui/core/FormLabel';

class QuestionSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gilad: true,
      jason: false,
      antoine: false,
    }
  }

  componentDidMount() {
  }

  handleChange = name => event => {
    this.setState({ ...this.state, [name]: event.target.checked });
  };




  render() {
    return (
      <div>
        <FormLabel component="legend">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore?</FormLabel>
        <FormControl style={{ minWidth: 120 }} >
          <InputLabel htmlFor="age-simple">Lorem Ipsum</InputLabel>
          <Select
            value={this.state.age}
            onChange={this.handleChange}
            inputProps={{
              name: 'age',
              id: 'age-simple',
            }}
          >
            <MenuItem value={1}>First</MenuItem>
            <MenuItem value={2}>Second</MenuItem>
            <MenuItem value={3}>Third</MenuItem>
          </Select>

          <br />

          <Divider variant="fullWidth" component='hr' />
        </FormControl>


      </div>

    );
  }
}

export default QuestionSelect;
