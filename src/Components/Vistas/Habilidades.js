import React, {Component} from 'react';
class Habilidades extends Component {
    render() {
        return ( 
            <div className="container">
                <div className="alert alert-danger" role="alert">
                La paciencia
                </div>
                <div className="alert alert-danger" role="alert">
                Confianza en los demás
                </div>
                <div className="alert alert-danger" role="alert">
                Escucha activa
                </div>
                <div className="alert alert-warning" role="alert">
               <strong> Flexibilidad</strong>
                </div>
                <div className="alert alert-danger" role="alert">
                <strong> Honestidad </strong>
                </div>
                <div className="alert alert-warning" role="alert">
                <strong>Capacidad de motivar y apoyar a otros</strong>
                </div>
            </div>
        );
    }
}

export default Habilidades;