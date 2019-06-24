import React, {Component} from 'react';
import NavbarR from './components/navbar';
import HomeHeader from './components/homeHeader';
import HomeServices from './components/homeServices';
import HomeContact from './components/homeContact';
import HomeFooter from './components/homeFooter';

class Home extends Component {
  render() {
    return (
      <div>
        <NavbarR/>
        <HomeHeader/>
        <HomeServices/>
        <HomeContact/>
        <HomeFooter/>
      </div>
      
    );
  }
}

export default Home;
