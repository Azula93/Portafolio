import React from 'react';
import { Row,Col,Container, Nav, Tab } from 'react-bootstrap';
import ProjectCard from './projectCard';
import colorSharp2 from '../assets/img/color-sharp2.png';
import projImg1 from "../assets/img/bodyscan.png";
import projImg2 from "../assets/img/CardComponentbyAzula.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/interactive.png";
import '../styles/projects.css';
import TrackVisibility from 'react-on-screen';


function Projects() {

  const projects = [
    {
      title:"Software de valoracion Antropometrica",
      description:"valoracion Antropometrica",
      imgUrl: projImg1,
      url:'https://github.com/Azula93/BodyScanLogin'
      
      
    },

    {
      title:"Product Card",
      description:"product preview card",
      imgUrl: projImg2,
      url:'https://github.com/Azula93/product-preview-card-component-main'
      
    },

    {
      title:"Codificador",
      description:"Encriptador de texto",
      imgUrl: projImg3,
      url:'https://github.com/Azula93/Challenge-Alura'
    },

    {
      title:"Interactive Rating",
      description:"Interactive Rating",
      imgUrl: projImg4,
      url:'https://github.com/Azula93/BodyScanLogin'
    },
  ]


  return (
    <section className='project' id='projects'>
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
            {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
            
            <h2>Proyectos</h2>
              <p>Aqui podrás conocer un poco mas a cerca de los   proyectos que he realizado</p>
              <Tab.Container id="projects-tabs"   defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
              <Nav.Item >
                <Nav.Link target='blank' eventKey="first" >Antropometria</Nav.Link>
              </Nav.Item>

              <Nav.Item >
                <Nav.Link target='blank' eventKey="second" >Product Card</Nav.Link>
              </Nav.Item>

              <Nav.Item >
                <Nav.Link target='blank' eventKey="third" >Codificador</Nav.Link>
              </Nav.Item>

            </Nav>

            <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
              <Tab.Pane eventKey="first">
                <Row>
                {
                  projects.length > 1 ? (
                    <ProjectCard 
                      key={0} // o el índice del segundo proyecto en el arreglo
                      url={projects.url}
                      {...projects[0]}
                    />
                  ) : null
                }

                  {/* CODIGO DEL VIDEO EN EL QUE SE MUESTRAN TODAS LAS TARJETAS EN UNA SOLA PESTAÑA{
                    projects.map((project, index) =>{
                      return (
                        <ProjectCard 
                        key={index}
                        {...project}
                        />
                      )
                    })
                  } */}
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
              <Row>
                {
                  projects.length > 1 ? (
                    <ProjectCard 
                      key={1} // o el índice del segundo proyecto en el arreglo
                      url={projects.url}
                      {...projects[1]}
                    />
                  ) : null
                }
              </Row>

              </Tab.Pane>

              <Tab.Pane eventKey="third">
                <Row>
                {
                  projects.length > 1 ? (
                    <ProjectCard 
                      key={2} // o el índice del segundo proyecto en el arreglo
                      url={projects.url}
                      {...projects[2]}
                    />
                  ) : null
                }
                </Row>
              </Tab.Pane>

            </Tab.Content>
            </Tab.Container>
            </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      
      <img className='background-image-right' src={colorSharp2} alt='imgsharp' />

    </section>
  )
}

export default Projects;