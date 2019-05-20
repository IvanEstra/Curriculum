import React, {Component} from 'react';
class ExperienciaLab extends Component {
    render() {
        return ( 
            <div className="container">

                <div class="alert alert-success" role="alert">
                <h4 class="alert-heading">Lo Sentimos, la informacion no esta Disponible!</h4>
                <div class="progress">
                <div  class="progress-bar progress-bar-striped bg-danger" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: "100%"}}></div>
                </div>
                
                <p>Por el momento no se ha encontrado un trabajo apropiado.</p>
                <img src={ require('../../Img/Triste.jpg')}  class="rounded mx-auto d-block" alt="..."/>
                <hr/>
                <p class="mb-0">Intentelo más tarde </p>
                </div>

            </div>

        );
    }
}

export default ExperienciaLab;