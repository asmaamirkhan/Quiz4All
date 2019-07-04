/*
 @author: Asmaa ~ 2019 
*/
import React, { Component } from 'react';
import Divider from '@material-ui/core/Divider';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';

class QuestionTextShort extends Component {
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
        <FormControl style={{ minWidth: 120 }} >
          <FormLabel component="legend">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore?</FormLabel>
          <TextField
            id="standard-name"
            label="Answer"
            value={this.state.name}
            onChange={this.handleChange()}
          />
          <br/>
          <Divider variant="fullWidth" component='hr' />
          <br/>
        </FormControl>
      </div>

    );
  }
}

export default QuestionTextShort;
