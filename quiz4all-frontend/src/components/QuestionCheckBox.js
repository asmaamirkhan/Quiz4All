/*
 @author: Asmaa ~ 2019 
*/
import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';

class QuestionCheckbox extends Component {
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
            <FormGroup>
              <FormControlLabel
                control={<Checkbox checked={this.state.gilad} onChange={this.handleChange('gilad')} value="1" />}
                label="1st Option"
              />
              <FormControlLabel
                control={<Checkbox checked={this.state.jason} onChange={this.handleChange('jason')} value="2" />}
                label="2nd Option"
              />
              <FormControlLabel
                control={
                  <Checkbox checked={this.state.antoine} onChange={this.handleChange('antoine')} value="3" />
                }
                label="3rd Option"
              />
            </FormGroup>
            <Divider variant="fullWidth" component='hr' />
            <br/>
          </FormControl>
      

      </div>

    );
  }
}

export default QuestionCheckbox;
