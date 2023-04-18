import React from 'react';
import "./navbar.css"
import { Link } from 'react-router-dom';
import { CartWidget } from '../CartWidget/CartWidget';

export const NavBar = () => {
  return (
    <div>

      <div className='header'>
      <h5>Nombre/Logo de empresa</h5>
      </div>
      
      
      
    
      <div className='contenedor'>

        <div className='links'>
         
          <Link to="/">Inicio</Link>
          <Link to='/productos/Hogar'>Hogar</Link>
          <Link to='/productos/Ropa'>Ropa</Link>
          <Link to="/counter">Contador</Link>

        </div>

        <div className='carrito'>
        <Link to="/cart"><CartWidget/></Link>
        </div>
      
      </div>
      
    </div>
  )
}