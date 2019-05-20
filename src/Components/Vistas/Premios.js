import React, {Component} from 'react';
class Premios extends Component {
    render() {
        return ( 
            <div>
               <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                   <center> <img src={ require('../../Img/HTML_certificate.jpg')}  class="d-block w-50" alt="..."/> </center>
                    </div>
                    <div class="carousel-item">
                    <center> <img src={ require('../../Img/Certificacion.png')}  class="d-block w-50" alt="..."/> </center>
                    </div>
                    <div class="carousel-item">
                    <center> <img src={ require('../../Img/Certificacion2.png')}  class="d-block w-50" alt="..."/> </center>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
                </div>
            </div>
        );
    }
}

export default Premios;