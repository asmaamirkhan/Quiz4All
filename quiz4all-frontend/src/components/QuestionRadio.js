/*
 @author: Asmaa ~ 2019 
*/
import React, { Component } from 'react';
import Divider from '@material-ui/core/Divider';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

class QuestionRadio extends Component {
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

        <FormControl component="fieldset" >
          <FormLabel component="legend">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore?</FormLabel>
          <RadioGroup
            aria-label="Gender"
            name="gender1"
            value={this.state.value}
            onChange={this.handleChange}
          >
            <FormControlLabel value="female" control={<Radio color='primary' />} label="1st Option" />
            <FormControlLabel value="male" control={<Radio color='primary' />} label="2nd Option" />
            <FormControlLabel value="other" control={<Radio color='primary' />} label="3rd Option" />

          </RadioGroup>
          <Divider variant="fullWidth" component='hr' />
          <br/>
        </FormControl>


      </div>

    );
  }
}

export default QuestionRadio;
