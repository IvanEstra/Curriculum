import React, {Component} from 'react';

class DatosEsco extends Component {
    render() {
        return ( 
            <div className="container">
            <div className="Padre">

            <ul class="list-group list-group-horizontal">
            <div className="card" style={{width: "25rem"}}>
                <img src={ require('../../Img/UTSH.png')} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Universidad Tecnologica de la Sierra Hidalguense</h5>
                    <p className="card-text">Actualmente estoy cursando la carrera de Tecnologias y Comunicacion en el area de Sistemas Informaticos en el 6° Cuatrimestre </p>
                    
                   <p>
                        <b>Dirección:</b> &nbsp;Carretera México-Tampico, Km. 100, Tramo Pachuca-Huejutla  &nbsp;<br/>
                        <b>Municipio:</b> &nbsp;Zacualtipán de Ángeles, Hidalgo &nbsp; <b>Teléfono:</b> &nbsp;01 774 742 1120 <br/>
                        <b>E-mail:</b> &nbsp;webmaster@utsh.edu.mx, &nbsp; rectoria@utsh.edu.mx <br/>
                        
                 </p>
                 <div align="center">
                    <a href="http://www.utsh.edu.mx/php/inicio.php" className="btn btn-primary">Ir al Sitio Web</a>
                    <a className="btn btn-outline-success my-2 my-sm-0"  href="https://www.facebook.com/utdelasierrahidalguense/" type="submit">Facebook</a>
                 </div>
                </div>
            </div>
          

            <div className="card" style={{width: "28rem"}}>
            <img src={ require('../../Img/COBAEH.png')} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h4 className="card-title"><center>CEMSaD San Agutin Metzquititlan</center></h4>
                <p className="card-text">En el Colegio de Bachilleres tome una capacitación de informatica, la cual pude terminarla satisfactoriamente con un promedio de 9. </p>
                <p>
                       <b>Calle:</b>&nbsp; Calle Insurgentes 11 &nbsp; <b>Nivel:</b>&nbsp;Bachillerato <br/>
                       <b>Municipio:</b>&nbsp;San Agustin Metzquititlán &nbsp; <br/>  <b> Clave:</b> 13EMS0030W <br/>
                       <b>Turno:&nbsp;</b> Matutino &nbsp; <b>Teléfonos: </b>7747425490
                </p>
                <center>
                <a href="http://www.cobaeh.edu.mx" className="btn btn-info">Sitio web</a>
                <a href="https://www.facebook.com/cobaeh.hgo" className="btn btn-outline-primary">Facebook</a>
                </center>
            </div>
            </div>
            <div className="card" style={{width: "25rem"}}>
                <img src={ require('../../Img/Logo.jpeg')} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Secundaria General "Nicandro Castillo" </h5>
                    <p className="card-text"> En esta secundaria tome un taller de Informatica en la cual me enseñaron lo basico de informatica.</p>
                    
                   <p>
                        <b>Calle:</b> &nbsp; Cerrada De Morelos 3 &nbsp;<br/><b>Nivel:</b> &nbsp;Secundaria <br/>
                        <b>Municipio:</b> &nbsp;San Agustin Metzquititlan &nbsp; <b>Teléfono:</b> &nbsp;7747421383 <br/>
                        <b>Clave:</b> &nbsp; 13DES0001T &nbsp; <br/> <b>Entidad:</b> &nbsp; Hidalgo <br/>
                        
                        
                 </p>
                 <div align="center">
                    <a  className="btn btn-outline-primary"  href="https://es-la.facebook.com/pages/category/School/Secundaria-General-Nicandro-Castillo-nicassam-516785991798266/" type="submit">Facebook</a>
                 </div>
                </div>
            </div>

            </ul>
            

            </div>
           </div>

        );
    }
}

export default DatosEsco;