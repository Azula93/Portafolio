import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { HiOutlineArrowCircleRight } from "react-icons/hi";
import headerImg from '../assets/img/header-img.svg';
import '../styles/banner.css';


function Banner() {
    //  LOGICA PARA APARECER Y DESAPARECER TEXTO
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Front-End Developer", "Software Developer"];
  const[text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random()*100);
  const period = 2000;

  useEffect(() =>{
    let ticker = setInterval(() =>{
      tick();
    }, delta);

    return () => {clearInterval(ticker)};
  }, [text]);

  const tick = () =>{
    let i = loopNum % toRotate.length;
    let fullText= toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0,text.length +1);

    setText(updatedText);

    if (isDeleting){
      setDelta(prevDelta => prevDelta/2)
    }

    if(!isDeleting && updatedText === fullText ){
      setIsDeleting(true);
      setDelta(period);
    }else if(isDeleting && updatedText ===''){
      setIsDeleting(false);
      setLoopNum(loopNum +1);
      setDelta(500);
    }
  }
  // FIN LOGICA PARA APARECER Y DESAPARECER TEXTO


  return (
    <section className='banner' id='home'>
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className='tagline'> ¡Bienvenido a mi espacio digital!</span>
            <h1>{`Hola soy Patricia,`} <span  className='wrap'> {text} </span></h1>
            <p>Tecnologa en Analisis y Desarrollo de software dedicada a convertir ideas en experiencias interactivas y funcionales. Mi camino en el universo del desarrollo web ha sido estimulante, y en este espacio, te invito a echar un vistazo a mi recorrido, proyectos y habilidades. ¡Aventúrate a descubrir de qué manera puedo aportar a tu próximo proyecto!</p>
            <button onClick={() => console.log('connect')}>Contactame <HiOutlineArrowCircleRight size={25}/></button>
          </Col>

          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Img" />
          </Col>
        </Row>
      </Container>

    </section>
  )
}

export default Banner;