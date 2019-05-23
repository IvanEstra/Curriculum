import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {
    render() {
        return ( 
            
        <div className="container">
            <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <Link className="nav-item nav-link active bg-primary" id="nav-home-tab"  to="/datos">Datos Personales</Link>
                    <Link className="nav-item nav-link active bg-primary" id="nav-home-tab"  to="/DatosEsco">Datos Escolares</Link>
                    <Link className="nav-item nav-link active bg-primary" id="nav-home-tab"  to="/ExperienciaLab">Experiencia Laboral</Link>
                    <Link className="nav-item nav-link active bg-primary" id="nav-home-tab"  to="/Premios">Premios</Link>
                    <Link className="nav-item nav-link active bg-primary" id="nav-home-tab"  to="/Habilidades">Habilidades</Link>
                    <Link className="nav-item nav-link active bg-primary" id="nav-home-tab"  to="/Formulario">Formulario</Link>
                    <Link className="nav-item nav-link active bg-primary" id="nav-home-tab"  to="/Peticiones">Peticiones</Link>
                </div>
            </nav>
            
        </div>
          

        );
    }
}

export default Navbar;