import React from 'react';
import { Container, Row,Col } from 'react-bootstrap';
// import {MailChimpForm} from './mailchimp';
import logo from '../assets/img/logoazula2.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import '../styles/footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <Container>
        <Row className='align-item-center'>
          {/* <MailChimpForm/> */}
          <Col sm={6}>
            <img src={logo} alt="logo" />
          </Col>
          <Col sm={6} className='text-center text-sm-end'>
            <div className="social-icon">
              <a href="/"> <img src={navIcon1} alt="linkeind" /> </a>
              <a href="/"> <img src={navIcon2} alt="fb" /> </a>
              <a href="/"> <img src={navIcon3} alt="instagram" /> </a>
            </div>
            <p>CopyRight 2024. Desarrollado por <span>AzulaDev</span> </p>
          
          </Col>

          

        </Row>
      </Container>

    </footer>
  )
}

export default Footer