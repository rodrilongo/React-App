import 'bootstrap/dist/css/bootstrap.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import { CartScreen } from './components/CartScreen/CartScreen';
// import { ItemCount } from "./components/ItemCount/ItemCount"
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer'
import{
  BrowserRouter as Router,
  Routes,
  // Navigate,
  Route
} from 'react-router-dom'
import { CartContext } from './components/context/CartContext';
import { useState } from 'react';


function App() {
  
   const [carrito, setCarrito] = useState([])

   console.log(carrito)

   const addToCart = (item) =>{
    setCarrito([...carrito, item])
   }

   const calcularCantidad = () =>{
    return carrito.reduce((acc, prod) => acc + prod.counter, 0)
   }

  return (
    <CartContext.Provider value={{addToCart,
    calcularCantidad
    }}>
      
        <div className='App'>

          <Router>
            <NavBar/>
            <Routes>
              <Route path='/' element={<ItemListContainer/>}/>
              <Route path='/productos/:categoryId' element={<ItemListContainer/>}/>
              <Route path='/cart' element={<CartScreen/>}/>
              <Route path='/detail/:itemId' element={<ItemDetailContainer/>}/>
              {/* <Route path='*' element={Navigate to='/'} /> */}
            </Routes>
          </Router>

        </div>
    </CartContext.Provider>
  );
}

export default App;
