import React from 'react';
import { Row,Col,Container, Nav, Tab } from 'react-bootstrap';
import ProjectCard from './projectCard';
import colorSharp2 from '../assets/img/color-sharp2.png';
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/CardComponentbyAzula.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/interactive.png";
import '../styles/projects.css';


function Projects() {

  const projects = [
    {
      title:"Software de valoracion Antropometrica",
      description:"valoracion Antropometrica",
      imgUrl: projImg1,
    },

    {
      title:"Product Card",
      description:"product preview card",
      imgUrl: projImg2,
    },

    {
      title:"Codificador",
      description:"Encriptador de texto",
      imgUrl: projImg3,
    },

    {
      title:"Interactive Rating",
      description:"Interactive Rating",
      imgUrl: projImg4,
    },
  ]


  return (
    <section className='project' id='project'>
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>Aqui podrás conocer un poco mas a cerca de los proyectos que he realizado</p>
            <Tab.Container id="projects-tab" defaultActiveKey="first">
            <Nav variant="nav nav-pills" defaultActiveKey="/home">
              <Nav.Item >
                <Nav.Link eventKey="first" >Tab 1</Nav.Link>
              </Nav.Item>

              <Nav.Item >
                <Nav.Link eventKey="second" >Tab 2</Nav.Link>
              </Nav.Item>

              <Nav.Item >
                <Nav.Link eventKey="third" >Tab 3</Nav.Link>
              </Nav.Item>
            </Nav>

            <Tab.Content>
              <Tab.Pane eventKey="first">
                <Row>
                  {
                    projects.map((project, index) =>{
                      return (
                        <ProjectCard 
                        key={index}
                        {...project}
                        />
                      )
                    })
                  }
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="second"></Tab.Pane>
              <Tab.Pane eventKey="third"></Tab.Pane>
            </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      
      <img className='background-image-right' src={colorSharp2} alt='imgsharp' />

    </section>
  )
}

export default Projects;