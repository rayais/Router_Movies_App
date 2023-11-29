import React from 'react'
import { Card } from 'react-bootstrap'
import ReactStars from 'react-stars';

function Movie_card({props}) {
   
  return (
    <>
    <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <ReactStars
        value={props.rating}
  count={5}
  size={24}
  color2={'#ffd700'} />
      </Card.Body>
    </Card>
    </>
  )
}

export default Movie_card