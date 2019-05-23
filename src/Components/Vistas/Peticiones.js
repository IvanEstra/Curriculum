import React, {Component} from 'react';
import {connect} from 'react-redux';
import {GET_DATA_ACTION} from '../../redux/actions/NotesActions'



class Peticiones extends Component {


    componentDidMount(){
        this.props.getDatos();
    }

    getData = () => {
        this.props.getDatos(); 
        console.log(this.props.stateDatos);
    }

    renderNames = () => {
        return this.props.stateDatos.map((item) => {
            return(<h1>{item.descripcion}</h1>);
        });
    }



    render() {
        return ( 

        <div>
            {this.renderNames()}
            <button onClick={this.getData}>Aceptar</button>
        </div>

        );
    }   
}

const mapStateToProps =({stateDatos}) => {
    return{
        stateDatos: stateDatos
    };
}

const mapDispatchToProps = (dispatch) => {
    return{
        getDatos: () => dispatch(GET_DATA_ACTION())
    };
};

const ConnectPeticiones = connect(mapStateToProps, mapDispatchToProps)(Peticiones);

export default ConnectPeticiones;
