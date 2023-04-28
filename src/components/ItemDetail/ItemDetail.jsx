import React, {useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {Card, Button} from 'react-bootstrap'
import "./itemdetail.css"
import {ItemCount} from '../ItemCount/ItemCount'
import { CartContext } from '../context/CartContext'



export const ItemDetail = ({id, description, price, Image, category, stock}) => {

  const navigate = useNavigate()

  const volverHaciaAtras = () => {
    navigate(-1)
  }

  const {addToCart} = useContext(CartContext)


  const [counter, setCounter] = useState(1)

  const sumarAlCarrito = () =>{
    const newItem = {
      id,
      description,
      Image,
      price,
      category,
      counter
    }
    console.log(newItem)
    addToCart(newItem)

  }


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
         <Button onClick={sumarAlCarrito} className='boton' variant="secondary">Agregar al carrito</Button> 
         <ItemCount max={stock} modify={setCounter} cantidad={counter}/>
       </Card.Body>
       <Button onClick={volverHaciaAtras} className='btn btn-succes'>Volver Atras</Button>
      </Card> 
    </div>
  )
}
