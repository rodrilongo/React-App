import React, { useState, useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { db} from '../../firebase/config'
import { addDoc, collection,  serverTimestamp} from 'firebase/firestore'


export const Checkout = () => {

  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext)


  const [email, setEmail] = useState("")

  const [nombre, setNombre] = useState("")

  const [apellido, setApellido] = useState("")

  const [telefono, setTelefono] = useState("")

  const handleSubmit = (e) => {

    e.preventDefault()

    console.log("Email:", email)
    console.log("Nombre:", nombre)
    console.log("Apellido:", apellido)
    console.log("Teléfono:", telefono)

    const orden = {
      buyer: {
        email,
        nombre,
        apellido,
        telefono
      },
      item: carrito,
      total_price: precioTotal(),
      data: serverTimestamp()
    }

    // Hacemos funcion para enviar la orden a firebase
   
    const ventas = collection(db,"orders")
    addDoc(ventas,orden)
    // Cuando usamos add lo que hacemos, sumamos una nueva orden a la colección antes creada 
      .then((res) => {
        Swal.fire({
          icon: 'success',
          title: 'Su compra fue realizada con éxitos',
          text: `Guarde su numero de compra: ${res.id}`,
          willClose: () => {
            vaciarCarrito()
          }
        })
      })
      .catch((error)=> console.log(error))

    // Actualizamos la cantidad en la base de datos

    // Con forEach re corremos toda la colección de la base de datos

    
  }


  return (
    <div>

      <h2>Terminar compra</h2>
      <hr />

      <form onSubmit={handleSubmit} className='container mt-3'>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="text" className="form-control" onChange={(e) => setEmail(e.target.value)} value={email} />
        </div>
        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input type="text" className="form-control" onChange={(e) => setNombre(e.target.value)} value={nombre} />
        </div>
        <div className="form-group">
          <label htmlFor="apellido">Apellido</label>
          <input type="text" className="form-control" onChange={(e) => setApellido(e.target.value)} value={apellido} />
        </div>
        <div className="form-group">
          <label htmlFor="telefono">Teléfono</label>
          <input type="text" className="form-control" onChange={(e) => setTelefono(e.target.value)} value={telefono} />
        </div>
        <button type='submit' className='btn btn-success'>Finalizar compra</button>
        <Link to='/cart' className='btn btn-info'>Volver al carrito</Link>
      </form>

    </div>
  )
}