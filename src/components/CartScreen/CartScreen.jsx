import React from 'react'
import {Button} from 'react-bootstrap'
import {BsFillTrashFill} from 'react-icons/bs'

export const CartScreen = () => {
  return (
    <div className='container my-5'>

        <h3>Resumen de compras</h3>
        <div className="listado">
            <p>Producto</p>
            <p>$</p>
            <p>Cantidad: </p>
            <Button className='btn btn-danger'>

                <BsFillTrashFill/>

            </Button>
        </div>


    </div>
  )
}
