import React from 'react'
import "./item.css"
import {Card, Button} from 'react-bootstrap'


export const Item = ({id, description, price, Image}) => {
  return (
    <div className='item'>
      <Card style={{ width: '17rem' }}>
       <Card.Img variant="top" src={Image}/>
        <Card.Body>
         <Card.Title>{id}</Card.Title>
         <Card.Title>{description}</Card.Title>
         <Card.Title>{price}</Card.Title>
         <Button variant="secondary">Ver más</Button>
       </Card.Body>
      </Card> 
    </div>
  )
}
