import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Row,Col,Container } from 'react-bootstrap';
import '../styles/skills.css';
import progress1 from '../assets/img/progress1.svg';
import progress2 from '../assets/img/progress2.svg';
import progress3 from '../assets/img/progress3.svg';
import colorSharp from "../assets/img/color-sharp.png"

function Skills() {

  // movimiento del carrusel en diferentes dispositivos
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


  return (
    <section className='skill' id='skills'>
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>Estas habilidades son las piedras angulares que utilizo para esculpir conceptos en realidades digitales impactantes.</p>
              <Carousel responsive={responsive} infinite={true}
              className='skill-slider'>
                <div className="item">
                  <img src={progress3} alt="Image1" />
                  <h5>HTML</h5>
                </div>

                <div className="item">
                  <img src={progress3} alt="Image2" />
                  <h5>CSS</h5>
                </div>

                <div className="item">
                  <img src={progress2} alt="Image3" />
                  <h5>JavaScript</h5>
                </div>

                <div className="item">
                  <img src={progress1} alt="Image4" />
                  <h5>React</h5>
                </div>

              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>

      <img className='background-image-left' src={colorSharp} alt="imgcolor" />

    </section>
  )
}

export default Skills;