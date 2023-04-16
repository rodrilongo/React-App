import React, { useState } from 'react';
import "./itemcount.css";



export const ItemCount = () => {

  const [counter, setCounter] = useState(1)

  const sumar = () =>{
    setCounter(counter+1)
  }
  const restar = () =>{
    if(counter > 0){
      setCounter(counter-1)
    }
  }
  const reset = () =>{
    setCounter(0)
  }



  return (
    <div>
      <h4>Cantidad: {counter}</h4>

      <div className='btn'>
        <button onClick={sumar}>➕</button>
        <button onClick={restar}>➖</button>
        <button onClick={reset}>☢️R</button>
      </div>
    </div>
  )
}
