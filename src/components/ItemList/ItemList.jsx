import React from 'react'
import { Item } from '../Item/Item'
import "./itemlist.css"

export const ItemList = ({productos=[]}) => {
  return (
    <div className='container'>

      <h2>Nuestros Productos</h2>
      <div className='fila'>
      {productos.map((item) => <Item {...item} key={item.id}/>)}
      </div>

    </div>
  )
}
