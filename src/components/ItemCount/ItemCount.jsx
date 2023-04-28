
import "./itemcount.css";



export const ItemCount = ({max, cantidad, modify}) => {

  // const [counter, setCounter] = useState(1)

  const sumar = () =>{
    if(cantidad < max){
      modify(cantidad+1)
    }
  }
  const restar = () =>{
    if(cantidad > 0){
      modify(cantidad-1)
    }
  }
  // const reset = () =>{
  //   setCounter(0)
  // }



  return (
    <>
      <h4>{cantidad}</h4>
      
       <div className='btn'>
        <button onClick={sumar}>➕</button>
        <button onClick={restar}>➖</button>
        {/* <button onClick={reset}>☢️R</button> */}
       </div>
    </>  
  )
}
