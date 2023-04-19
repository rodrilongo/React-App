import React from 'react'
import {Card, Button} from 'react-bootstrap'
import "./itemdetail.css"
import {ItemCount} from '../ItemCount/ItemCount'



export const ItemDetail = ({id, description, price, Image, category}) => {
  return (
    <div className='itemDetail'>
      <Card style={{ width: '19rem' }}>
       <Card.Img variant="top" src={Image}/>
        <Card.Body>
         <Card.Title>{id}</Card.Title>
         <Card.Title>{description}</Card.Title>
         <Card.Title>{price}</Card.Title>
         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur nobis cumque a, dolores, aliquid, culpa labore sunt unde repellat sit vero! Totam beatae eligendi vel quibusdam ad unde sequi saepe.</p>
         <Card.Title>Categoria: {category}</Card.Title>
         <Button className='boton' variant="secondary">Agregar al carrito</Button> 
         <ItemCount/>
       </Card.Body>
      </Card> 
    </div>
  )
}
