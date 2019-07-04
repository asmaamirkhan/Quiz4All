/*
 @author: Asmaa ~ 2019 
*/
import React, {Component} from 'react';
import Navbar from './components/navbar';
import HomeHeader from './components/homeHeader';
import HomeServices from './components/homeServices';
import HomeContact from './components/homeContact';
import HomeFooter from './components/homeFooter';

class HomePage extends Component {
  render() {
    return (
      
      <div>
        <Navbar/>
        <HomeHeader/>
        <HomeServices/>
        <HomeContact/>
        <HomeFooter/>
      </div>
      
    );
  }
}

export default HomePage;
