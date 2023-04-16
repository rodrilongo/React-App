import React from 'react';
import "./navbar.css"
import { CartWidget } from '../CartWidget/CartWidget';

export const NavBar = () => {
  return (
    <div>

      <div className='header'>
      <h5>Nombre/Logo de empresa</h5>
      </div>
      
      
      
    
      <div className='contenedor'>

        <div className='links'>
          <p>Link1</p>
          <p>Link2</p>
          <p>Link3</p>

        </div>

        <div className='carrito'>
            <CartWidget/>
        </div>
      
      </div>
      
    </div>
  )
}