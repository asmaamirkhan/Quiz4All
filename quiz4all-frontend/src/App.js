import React, { Component } from 'react';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import HomePage from './HomePage';
import ProfessorHomePage from './ProfessorHomePage';
import ProfessorGuidePage from './ProfessorGuidePage';
//import ProfessorHomePageV2 from './ProfessorDraft';
import ProfessorNewQuizPage from './ProfessorNewQuizPage';
class App extends Component {
  componentDidMount() {
    document.title = "Quiz4All"
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/home" component={ProfessorHomePage} />
          <Route path="/guide" component={ProfessorGuidePage} />
          <Route path="/newQuiz" component={ProfessorNewQuizPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
