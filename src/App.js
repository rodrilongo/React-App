import 'bootstrap/dist/css/bootstrap.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";



function App() {

  return (
        <>
        <div>
        <NavBar/>
        <ItemListContainer greeting="Bienvenidos a mi primer Ecommerce!"/>
        </div>
        </>
  );
}

export default App;
