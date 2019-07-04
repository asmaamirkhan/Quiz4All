/*
 @author: Asmaa ~ 2019 
*/
import React, {Component} from 'react';
import ProfNavbar from './components/profNavbar';
import ProfSidebar from './components/profSidebar';
import ProfessorGuideContent from './components/professorGuideContent'
class ProfessorGuidePage extends Component {
  render() {
    return (
      
      <div>
        <ProfNavbar/>
        <ProfSidebar/>
        <ProfessorGuideContent/>
      </div>
      
    );
  }
}

export default ProfessorGuidePage;
