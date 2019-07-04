/*
 @author: Asmaa ~ 2019 
*/
import React, {Component} from 'react';
import ProfNavbar from './components/profNavbar';
import ProfSidebar from './components/profSidebar';
import ProfessorHomeContent from './components/professorHomeContent'
class ProfessorHome extends Component {
  render() {
    return (
      
      <div>
        <ProfNavbar/>
        <ProfSidebar/>
        <ProfessorHomeContent/>
      </div>
      
    );
  }
}

export default ProfessorHome;
