import React, { Component } from 'react';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './Home'

class App extends Component {
  componentDidMount(){
    document.title = "Quiz4All"
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route  path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
