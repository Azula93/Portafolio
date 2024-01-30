import React from 'react';
import { Col } from 'react-bootstrap';


function ProjectCard({title,description,imgUrl,url}) {
  return (
    <Col size={12} sm={6} md={4} className='mx-auto'>
      <a className='linkprojects' href={url} target="_blank" rel="noopener noreferrer"> 
        <div className="proj-imgbx">
          <img src={imgUrl} alt="imagen" />
          <div className="proj-txtx">
            <h4 >{title} </h4>
            <span>{description}</span>
          </div>
      </div>
      </a>
    </Col>
  )
}

export default ProjectCard;