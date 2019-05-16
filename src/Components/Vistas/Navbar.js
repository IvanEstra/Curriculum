import React, {Component} from 'react';
class Navbar extends Component {
    render() {
        return ( 
            <div className="Container">
        
            <nav>
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#" role="tab"  aria-selected="true">Datos Personales</a>
                    <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#" role="tab"  aria-selected="false">Datos Escolares</a>
                    <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#" role="tab"  aria-selected="false">Eperiencia Laboral</a>
                    <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#" role="tab"  aria-selected="false">Experiencia</a>
                    <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#" role="tab"  aria-selected="false">Educacion</a>
                </div>
            </nav>

            </div>

        );
    }
}

export default Navbar;