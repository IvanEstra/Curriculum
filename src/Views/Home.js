import React, { Component } from 'react';
class Home extends Component {
    render() {
        return ( <
            div className = "container" >
            <
            div className = "row" >
            <
            div className = "col-6" >
            <
            h1 > Hola! < /h1> <
            /div> <
            div className = "col-8" >
            <
            h2 > Este es mi CV < /h2> <
            /div> <
            div className = "nav" >
            <
            button type = "button"
            class = "btn btn-primary" > Datos Generales < /button> <
            button type = "button"
            class = "btn btn-secondary" > Datos Escolares < /button> <
            button type = "button"
            class = "btn btn-success" > Experiencia Laboral < /button> <
            button type = "button"
            class = "btn btn-danger" > Dangerr < /button> <
            button type = "button"
            class = "btn btn-warning" > Warning < /button> <
            /div>

            <
            /div> <
            /div>

        );
    }
}

export default Home;