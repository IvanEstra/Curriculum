import React from 'react'; 
import Home from './Views/Home';
import Navbar from  './Components/Vistas/Navbar';
import Datos from './Components/Vistas/Datos';
import DatosEsco from './Components/Vistas/DatosEsco';


function App() {
  return (
    
    <div>
      
      
      <Home/>
      <Navbar/>
      <Datos/>
      <DatosEsco/>
    </div>
    
  );
}

export default App;
