/*
 @author: Asmaa ~ 2019 
*/
import React, {Component} from 'react';
import ProfNavbar from './components/profNavbar';
import ProfSidebar from './components/profSidebar'

class ProfessorHome extends Component {
  render() {
    return (
      
      <div>
        <ProfNavbar/>
        <ProfSidebar/>
      </div>
      
    );
  }
}

export default ProfessorHome;
