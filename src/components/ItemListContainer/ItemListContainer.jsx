import React, { useEffect, useState } from 'react';
import {ImSpinner7} from 'react-icons/im'
import { pedirProductos } from "../../helpers/pedirProductos"
import { ItemList } from '../ItemList/ItemList';
import "./itenlistcontainer.css"

export const ItemListContainer = ({greating}) => {

  const [items, setItems] = useState([])

  const [loading, setLoading] = useState(false)

  useEffect(() =>{
   
  setLoading(true)
  pedirProductos()
  .then((res) =>{
    setItems(res)
  })
  
  .catch((error) => console.log(error))
  .finally(() => {setLoading(false)})
  }, [])



  return (
    <>
    {
      loading
      ?<div className='spinner'><ImSpinner7/></div>
      :<ItemList productos={items}/>
    }
    </>
  )
}