import React, { useEffect, useState } from 'react'
// import {pedirProductos} from '../../helpers/pedirProductos'
import {db} from '../../firebase/config'
import {ImSpinner7} from 'react-icons/im'
import {ItemDetail} from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import "./ItemDetail.css"
import { doc, getDoc } from 'firebase/firestore'



export const ItemDetailContainer = () => {

  const [item, setItem] = useState(null)

  const [loading, setLoading] = useState(false)

  const {itemId} = useParams()

  useEffect(() =>{
    setLoading(true)

   getDoc(doc(db, 'productos',itemId))

        .then((doc) =>{
            setItem({
                id: doc.id, ...doc.data()
            })
            
        })
        .catch((err) => console.log(err))
        .finally(() =>{

            setLoading(false)
        })

},[itemId])




  return (
    <section>
        {
            loading
            ?<div className='spinner'><ImSpinner7/></div>
            :<ItemDetail {...item}/>
        }

    </section>
  )
}