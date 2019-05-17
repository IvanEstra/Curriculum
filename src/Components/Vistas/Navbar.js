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
                    <Link className="nav-item nav-link active bg-primary" id="nav-home-tab"  to="/Home">Experiencia Laboral</Link>
                    <a className="nav-item nav-link active bg-primary" id="nav-profile-tab" data-toggle="tab" href="/Datos" role="tab"  aria-selected="false">Premios</a>
                    <a className="nav-item nav-link active bg-primary" id="nav-profile-tab" data-toggle="tab" href="#" role="tab"  aria-selected="false">Abilidades</a>
                </div>
            </nav>
            
        </div>
          

        );
    }
}

export default Navbar;