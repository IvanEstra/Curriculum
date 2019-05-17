import React, {Component} from 'react';
class Home extends Component {
    render() {
        return ( 
            <header className="container">
            <div className="alert alert-info" role="alert">
                 <center> <h1>Hola!! Este es mi Curriculum Vitae </h1></center>
                 
                <div className="row">
                    <div className="col-6"></div>
                    
                </div>
                </div>
                <div>
                <img src={ require ('../Img/Hola.jpg')} className="img-fluid" height="100" alt="..."/>
             </div>
            </header>

        );
    }
}

export default Home;