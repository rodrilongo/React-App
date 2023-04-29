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
// import { useState } from 'react';
import { CartProvider } from './components/context/CartContext';


function App() {
  
  
  return (
    <CartProvider>
      
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
    </CartProvider>
  );
}

export default App;
