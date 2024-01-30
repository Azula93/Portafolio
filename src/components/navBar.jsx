import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';
import logo from  '../assets/img/logoazula2.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon4.svg';
import ContactButton from './contactbutton';
import '../styles/navbar.css';

function NavBar() {

 

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () =>{
      if (window.scrollY > 50) {
        setScrolled(true);
      }else{
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) =>{
    setActiveLink(value);
  }

  

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}> 
      <Container>
        <Navbar.Brand href="#">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" > 
          <span className='navbar-toggler-icon' ></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home') }>Inicio</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')} >Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Proyectos</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className="social-icon">
              <a href='https://www.linkedin.com/in/patricia-riquett/' target="_blank" rel="noopener noreferrer"> <img src={navIcon1} alt="linkedin" /> </a>
              <a href='https://github.com/Azula93' target="_blank" rel="noopener noreferrer"> <img src={navIcon2} alt="fb" /> </a>
              {/* <a href='#/'> <img src={navIcon3} alt="instagram" /> </a> */}
            </div>

              <span> 
                <ContactButton  className='vvd'/>  
              </span>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;