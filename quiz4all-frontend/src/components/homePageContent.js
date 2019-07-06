/*
 @author: Asmaa ~ 2019 
*/
import React, { Component } from 'react';
import { Layout, Typography, Divider, Button, Row, Col } from 'antd';
import { GoRepoForked } from "react-icons/go";
import {
  FaGraduationCap, FaClipboardList, FaLaptopCode,
  FaRegHeart, FaLinkedin, FaEnvelope
} from "react-icons/fa";

import 'antd/dist/antd.css';
import '../index.css';

import SignModal from './signModal';
import StudentModal from './studentModal';
import Navbar from './homePageNavbar';


const { Content } = Layout;
const { Title, Text } = Typography;

class HomePageContent extends Component {

  signUpModalRef = ({ showModal }) => {
    this.showSignModal = showModal;
  }

  onSignUpClick = () => {
    this.showSignModal();
  }

  StudentModalRef = ({ showModal }) => {
    this.showModal = showModal;
  }

  onStudentClick = () => {
    this.showModal();
  }

  render() {
    return (
      <div style={{ height: '100%' }} >
        <SignModal ref={this.signUpModalRef} ></SignModal>
        <StudentModal ref={this.StudentModalRef}></StudentModal>
        <Layout style={{ height: '100%' }}>
          <Layout style={{ height: '100%', }}>
            <Navbar />
            <div id="home-page" style={{ height: '100%', position: 'relative' }}>
              <Content style={{
                padding: '', background: 'rgba(92, 77, 66, 0.8)', width: '100%', 'flex-direction': 'column', justifyContent: 'center',
                position: 'absolute', height: '100%', display: 'flex', textAlign: 'center'
              }}>
                <Title level={1} style={{ color: 'white', fontSize: '50px', margin: '0 10%' }}>Quiz4All an integrated system for quizzes  <Divider type="horizontal" style={{ height: 3 }} /></Title>


                <Text style={{ color: 'white', fontSize: 20 }}>
                  Quiz4All is an online tool developed by&nbsp;
                <a href="https://www.linkedin.com/in/asmaa-mirkhan/">Asmaa</a>
                  &nbsp;to help professors make quizzes easily <br />
                  In another hand it is easy-to-use for students
              </Text>
                <div style={{ margin: 10 }}>
                  <Button type="primary" shape="round" size={'large'} onClick={this.onSignUpClick}>
                    <FaGraduationCap size='25' /> Sign up as a professor!
                </Button>
                  <Button type="primary" shape="round" size={'large'} onClick={this.onStudentClick}>
                    <FaClipboardList size='25' /> I have a quiz!
                </Button>
                </div>
              </Content>
            </div>
          </Layout>
          <Layout styel={{ display: 'flex', justifyContent: 'center', }}>
            <div id="home-page" style={{ height: '100%', position: 'relative' }}>
              <Content style={{
                width: '100%', 'flex-direction': 'column', justifyContent: 'center',
                position: 'absolute', display: 'flex', textAlign: 'center', padding: '20px'
              }}>
                <Title level={1} style={{ fontSize: '50px', margin: '20px 10%' }}>
                  Features
               </Title>
                <div style={{ height: '3px', width: '10%', background: 'black', alignSelf: 'center' }}></div>
                <Row style={{ padding: '30px' }}>
                  <Col span={8} style={{ padding: '0 30px' }}>
                    <div >
                      <FaLaptopCode size='100px' />
                      <Title level={3}>Stable System</Title>
                      <p >The tool is updated regularly to keep it bug free!</p>
                    </div>

                  </Col>
                  <Col span={8} style={{ padding: '0 30px' }}>
                    <div >
                      <GoRepoForked size='100px' />
                      <Title level={3}>Open Source</Title>
                      <p >Codes are available on <a href='https://github.com/asmaamirkhan/quiz4all'>github</a> and ready to use</p>
                    </div>
                  </Col>
                  <Col span={8} style={{ padding: '0 30px' }}>
                    <div >
                      <FaRegHeart size='100px' />
                      <Title level={3}>Made with Love</Title>
                      <p >The tool is made with love by Asmaa</p>
                    </div>
                  </Col>
                </Row>
                <Title level={1} style={{ fontSize: '50px', margin: '20px 10%' }}>
                  For Contact
               </Title>
                <div style={{ height: '3px', width: '10%', background: 'black', alignSelf: 'center' }}></div>
                <Row style={{ padding: '30px' }}>
                  <Col span={12}>
                    <div >
                      <a href='https://www.linkedin.com/in/asmaa-mirkhan/'>
                        <FaLinkedin size='50px' />
                      </a>
                    </div>
                  </Col>
                  <Col span={12} >
                    <div >
                      <a href='mailto:asmaamirkhan.am@gmail.com'>
                        <FaEnvelope size='50px' />
                      </a>
                    </div>
                  </Col>
                </Row>


              </Content>

            </div>
          </Layout>
        </Layout>


      </div>

    );
  }
}

export default HomePageContent;
