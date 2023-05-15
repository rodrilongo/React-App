import React, {useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {Card, Button} from 'react-bootstrap'
import "./itemdetail.css"
import {ItemCount} from '../ItemCount/ItemCount'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'



export const ItemDetail = ({ description, price, image, category, stock}) => {

  const navigate = useNavigate()

  const volverHaciaAtras = () => {
    navigate(-1)
  }

  const {addToCart} = useContext(CartContext)


  const [counter, setCounter] = useState(1)

  const sumarAlCarrito = () =>{
    const newItem = {

      description,
      image,
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
       <Card.Img variant="top" src={image}/>
        <Card.Body>
         <Card.Title>{description}</Card.Title>
         <Card.Title>${price}</Card.Title>
         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur nobis cumque a, dolores, aliquid, culpa labore sunt unde repellat sit vero! Totam beatae eligendi vel quibusdam ad unde sequi saepe.</p>
         <Card.Title>Cantidad</Card.Title>
         <Button onClick={sumarAlCarrito} className='boton' variant="success">Agregar al carrito</Button> 
         <ItemCount max={stock} modify={setCounter} cantidad={counter}/>
       </Card.Body>
       <Button onClick={volverHaciaAtras} className='btn btn-success'>Volver Atras</Button>
       <Link to='/cart' className='btn btn-info'> Ir al carrito</Link>
      </Card> 
    </div>
  )
}
