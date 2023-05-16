import React, { useEffect, useState } from 'react';
import {ImSpinner7} from 'react-icons/im'
// import { pedirProductos } from "../../helpers/pedirProductos"
import {db} from '../../firebase/config'
import { ItemList } from '../ItemList/ItemList';
import "./itenlistcontainer.css"
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';

export const ItemListContainer = ({greating}) => {

  const [items, setItems] = useState([])

  const [loading, setLoading] = useState(false)

  // const param = useParams()
  // setLoading(true)
  // pedirProductos()
  // .then((res) =>{
  //   if (categoryId){
  //     setItems(res.filter(prod => prod.category === categoryId))
  //   }else{
  //     setItems(res)
  //   }
    
  // })
  
  // .catch((error) => console.log(error))
  // .finally(() => {setLoading(false)})

  const {categoryId} = useParams()

  useEffect(() =>{
    setLoading(true)
    

    const productos = categoryId
      ? query(collection(db, "productos"), where("category", "==", categoryId)) 
      :collection(db, "productos")
      getDocs(productos)
      .then((res) => {
              const newItem = res.docs.map((doc) => {
                return { id: doc.id, ...doc.data() };
              });
              console.table(newItem);
              setItems(newItem);
            })
            .catch((err) => console.log(err))
            .finally(() => {
              setLoading(false);
            });

  }, [categoryId])
  

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