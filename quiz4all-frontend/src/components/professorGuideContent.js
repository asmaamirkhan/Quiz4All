/*
 @author: Asmaa ~ 2019 
*/
import React, { Component } from 'react';
import { Container} from 'react-bootstrap';
import { getCookie } from 'react-simple-cookie-store';
import Divider from '@material-ui/core/Divider';
import QuestionCheckbox from './QuestionCheckBox';
import QuestionRadio from './QuestionRadio';
import QuestionSelect from './QuestionSelect';
import QuestionTextShort from './QuestionTextShort';
import QuestionTextParagraph from './QuestionTextParagraph';
class ProfessorGuideContent extends Component {
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
        <div className='content' style={{ 'padding': '25px' }}>
          <Container>
              <h3>Our Available Components<Divider variant="fullWidth" component='hr' /></h3>
              <h5>Multiple choices: a question with multiple true answers</h5>
              <QuestionCheckbox/>
              
              <h5>Multiple choices: a question with single true answer</h5>
              <QuestionRadio/>
              <h5>Drop Down Menu: a question with single true answer shown as a list</h5>
              <QuestionSelect/>
              <h5>Short answer question: the answer has few words</h5>
              <QuestionTextShort/>
              <h5>Long answer question: the answer is a paragraph </h5>
              <QuestionTextParagraph/>
          </Container>
        </div>
      </div>

    );
  }
}

export default ProfessorGuideContent;
