import React, {Component} from 'react';
import '../../Css/EstiloForm.css';
class Datos extends Component {
    render() {
        return (
      
                        
                <div align="center">
                <div className="card mb-6" style={{maxWidth: "800px"}}>
                    <div class="row no-gutters">
                        <div className="col-md-4">
                        <img src={ require('../../Img/Foto.jpg')} className="card-img" alt="..."/>
                        </div>
                        <div className="col-md-8">
                        <div className="card-body">
                            <h1 className="card-title">Carlos Iván Estrada López </h1>
                            <p>
                                <b>Celular:</b> 7717224572 <b>Hotmail:</b> Iv0499@hotmail.com <br/>
                                <b>Gmail:</b>navicarlos991104@gmail.com 
                            </p>
                            <p>
                                <b>Dirección:</b> San Agustín Metzquititlán <b> <b></b>Cp:</b> 43380
                                &nbsp;<b>Estado:</b> Hidalgo
                            </p>
                            <p className="card-text">Soy estudiante de la Universidad Tecnólogica de la Sierra Hidalguense.</p>
                            <p className="card-text"><small className="text-muted">Mayo del 2019</small></p>
                        </div>
                        </div>
                    </div>
                </div>

            </div>
       
        
       
        );
    }
}

export default Datos;