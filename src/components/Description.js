import React from 'react'

import { useParams } from 'react-router-dom';
import data from './Data';
import { Card } from 'react-bootstrap';
import ReactStars from 'react-stars';


function Description() {
   const {title}= useParams() ;
   const mov=data.filter((e)=>e.title===title)
   const movie=mov[0]
  return (
    <div style={{display:"flex",gap:"10"}}>
    <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src={movie.img} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.description}</Card.Text>
        <ReactStars
        value={movie.rating}
  count={5}
  size={24}
  color2={'#ffd700'} />
      </Card.Body>
    </Card>
    <iframe width="600" height="400" 
    src={movie.trailer}
    title="YouTube video player" frameborder="0" allow="accelerometer; 
    autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" autoplay allowfullscreen
    ></iframe>
    </div >
  )
}
export default Description