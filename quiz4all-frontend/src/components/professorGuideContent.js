/*
 @author: Asmaa ~ 2019 
*/
import React, { Component } from 'react';
import QuestionCheckbox from './QuestionCheckBox';
import QuestionRadio from './QuestionRadio';
import QuestionSelect from './QuestionSelect';
import QuestionTextShort from './QuestionTextShort';
import QuestionTextParagraph from './QuestionTextParagraph';

class ProfessorGuideContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
  }




  render() {
    return (
      <div>
        <QuestionCheckbox />
        <QuestionRadio />
        <QuestionSelect />
        <QuestionTextShort />
        <QuestionTextParagraph />
      </div>

    );
  }
}

export default ProfessorGuideContent;
