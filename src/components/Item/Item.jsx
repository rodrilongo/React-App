import React from 'react'

export const Item = ({id, description, price, Image}) => {
  return (
    <div>

     <h3>Id:{id}</h3>
     <p>Descripcion:{description}</p>
     <p>Precio:{price}</p>
     <img src={Image} alt={Image} />

    </div>
  )
}
