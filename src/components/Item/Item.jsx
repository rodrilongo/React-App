import React from 'react'
import "./item.css"
import {Card, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'


export const Item = ({id, name, description, price, image, category}) => {
  return (
    <div className='item'>
      <Card style={{ width: '17rem' }}>
       <Card.Img variant="top" src={image}/>
        <Card.Body>
         <Card.Title>{name}</Card.Title>
         <Card.Title>Descripción: {description}</Card.Title>
         <Card.Title>{price}</Card.Title>
         <Card.Title>Categoria: {category}</Card.Title>
         <Link to={`/detail/${id}`}>
           <Button variant="primary" className='botonItem'>Ver más</Button>
         </Link>
       </Card.Body>
      </Card> 
    </div>
  )
}
