import React, { useContext } from 'react'
import {Button} from 'react-bootstrap'
import {BsFillTrashFill} from 'react-icons/bs'
import { CartContext } from '../context/CartContext'


export const CartScreen = () => {
  const {carrito, precioTotal, removerItem, vaciarCarrito} = useContext(CartContext)


  return (
    <div className='container'>
    <h3>Resumen del carrito</h3>
    {
      carrito.map((prod) => (
        <>
        <div className='listado'>
          <p>Producto: {prod.description}</p>
          <p>$ {prod.price}</p>
          <p>cantidad: {prod.counter}</p>

        </div>
        <Button onClick={() => removerItem (prod.id)}>
          <BsFillTrashFill/>

        </Button>
        </>
      ))
    }
    <hr />
    <strong>Precio Total: ${precioTotal()}</strong>
    <Button className='btn btn-danger' onClick={vaciarCarrito}>Vaciar Carrito</Button>
    </div>

  )
}
