import React from 'react';
import "./navbar.css"
import { Link } from 'react-router-dom';
import { CartWidget } from '../CartWidget/CartWidget';

export const NavBar = () => {
  return (
    <div>

      <div className='header'>
      <h5>TIPTAK</h5>
      </div>
      
      
      
    
      <div className='contenedor'>

        <div className='links'>
         
          <Link to="/" class ="text-decoration-none ; text-light" ><b>Inicio</b></Link>
          <Link to='/productos/Hogar' class ="text-decoration-none ; text-light"> <b>Hogar</b></Link>
          <Link to='/productos/Ropa' class ="text-decoration-none ; text-light"><b>Ropa</b></Link>
          {/* <Link to="/counter">Contador</Link> */}

        </div>

        <div className='carrito'>
        <Link to="/cart" class ="text-decoration-none ; text-light"><CartWidget/></Link>
        </div>
      
      </div>
      
    </div>
  )
}