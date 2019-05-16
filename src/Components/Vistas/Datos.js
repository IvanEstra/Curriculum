import React, {Component} from 'react';
class Datos extends Component {
    render() {
        return (
             <div class="container">
        <div class="Principal">
                          
                <div class="Nombre">
                    <h1>Carlos Iván Estrada López</h1>
                    <p>
                        <b>Celular:</b> 7717224572 <b>Email:</b> Iv0499@hotmail.com
                    </p>
                </div>
                <div>
                <img src={ require ('../Imgs/Hola.jpg')} class="img-fluid" height="100" alt="..."/>
                </div>
          
        </div>  
      </div>
       
        );
    }
}

export default Datos;