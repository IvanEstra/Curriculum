import React, {Component} from 'react';
import '../../Css/EstiloForm.css';


class Formulario extends Component {
    render() {
        return ( 
            <div className="contenedor">
            <form action="">
            <div className="form-header">
                    <h1 className="form-title">C<span>ontacto</span></h1>           
            </div>

            <label for="nombre" className="form-label">Nombre: </label>
            <input type="text" id="Nombre" className="form-input" placeholder="Escribe tu Nombre"></input>

            <label for="direccion" className="form-label">Direccion </label>
            <input type="text" id="direccion" className="form-input" placeholder="Escribe tu Direccion"></input>

            <label for="correo" className="form-label">Correo  Electronico </label>
            <input type="email" id="correo" className="form-input"  placeholder="Escribe tu Email"></input>

            <label for="mensaje" className="form-label">Mensaje</label>
            <textarea id="mensaje" className="form-textarea" placeholder="Escribe aqui tu mensaje"></textarea>


            <input type="submit" className="btn-submit" value="Enviar"></input>
             </form>                
            </div>

        );
    }
}

export default Formulario;