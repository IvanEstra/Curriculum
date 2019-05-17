import React, {Component} from 'react';
class DatosEsco extends Component {
    render() {
        return ( 
            <div className="container">
            <ul class="list-group list-group-horizontal">
           <div className="card" style={{width: "25rem"}}>
            <img src={ require('../../Img/UTSH.png')} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Universidad Tecnologica de la Sierra Hidalguense</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="http://www.utsh.edu.mx/php/inicio.php" className="btn btn-primary">Ir al Sitio Web</a>
            </div>
            </div>
            <div className="card" style={{width: "28rem"}}>
            <img src={ require('../../Img/COBAEH.png')} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">CEMSaD San Agutin Metzquititlan</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <p>
                   <b>Calle:</b> Calle Insurgentes 11 <b>Nivel:</b>Bachillerato &nbsp;
                   <b>Municipio:</b>San Agustin Metzquititlan &nbsp; <b> Clave:</b> 13EMS0030W
                </p>
                
                <a href="http://www.mejoratuescuela.org/escuelas/index/13EMS0030W" className="btn btn-primary">Ir al Sitio Web</a>
            </div>
            </div>

            </ul>
           </div>

        );
    }
}

export default DatosEsco;