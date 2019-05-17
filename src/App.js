import React from 'react'; 
import Home from './Views/Home';
import Navbar from  './Components/Vistas/Navbar';
import Datos from './Components/Vistas/Datos';
import DatosEsco from './Components/Vistas/DatosEsco';
import Footer from './Components/Vistas/Footer'



import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  return (
   <Router>
        <Navbar/>
     <Switch>
       <Route exact path="/" component={Home}/>
       <Route  path="/datos" component={Datos}/>
       <Route  path="/DatosEsco" component={DatosEsco}/>
     </Switch>
    <Footer/>
   </Router>
    
  );
}

export default App;
