import React from 'react'
import { Item } from '../Item/Item'
import "./itemlist.css"

export const ItemList = ({productos=[]}) => {
  return (
    <div>

      <h2>Nuestros Productos</h2>
      {productos.map((item) => <Item {...item} key={item.id}/>)}

    </div>
  )
}
