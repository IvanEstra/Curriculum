import React from 'react'; 
import Home from './Views/Home';
import Navbar from  './Components/Vistas/Navbar';
import Datos from './Components/Vistas/Datos';
import DatosEsco from './Components/Vistas/DatosEsco';
import Footer from './Components/Vistas/Footer'
import Formulario from './Components/Vistas/Formulario'
import ExperienciaLab from './Components/Vistas/ExperienciaLab';
import Premios from './Components/Vistas/Premios';
import Habilidades from './Components/Vistas/Habilidades';



import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  return (
   <Router>
        <Navbar/>
     <Switch>
       <Route exact path="/" component={Home}/>
       <Route  path="/datos" component={Datos}/>
       <Route  path="/DatosEsco" component={DatosEsco}/>
       <Route  path="/ExperienciaLab" component={ExperienciaLab}/>
       <Route  path="/Formulario" component={Formulario}/>
       <Route  path="/Premios" component={Premios}/>
       <Route  path="/Habilidades" component={Habilidades}/>
     </Switch>
    <Footer/>
   </Router>
    
  );
}

export default App;
