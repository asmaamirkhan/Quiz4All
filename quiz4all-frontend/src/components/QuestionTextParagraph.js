/*
 @author: Asmaa ~ 2019 
*/
import React, { Component } from 'react';
import Divider from '@material-ui/core/Divider';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import FormLabel from '@material-ui/core/FormLabel';

class QuestionTextParagraph extends Component {
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
            id="standard-multiline-flexible"
            label="Multiline"
            multiline
            rowsMax="4"
            value={this.state.value}
            onChange={this.handleChange()}
            style={{ 'width': '100%' }}
          />
          <Divider variant="fullWidth" component='hr' />
          <br/>

        </FormControl>


      </div>

    );
  }
}

export default QuestionTextParagraph;
