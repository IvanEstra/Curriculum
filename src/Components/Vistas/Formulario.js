import React, {Component} from 'react';
import '../../Css/EstiloForm.css';



class Formulario extends Component {
    render() {
        return ( 
        
        <div class="container">
        <div class="row centered-form">
            <div class="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title">Formulario</h3>
                    </div>
                    <div class="panel-body">
                        <form>

                            <div class="row">
                                    <div class="form-group">
                                        <label class="control-label col-xs-2">Nombre:</label>
                                        <div class="col-xs-10">
                                        <input type="text" placeholder="Name" class="form-control"/>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                    <div class="form-group">
                                        <label class="control-label col-xs-2">Apellido: </label>
                                        <div class="col-xs-10">
                                        <input type="text" placeholder="Last Name" class="form-control"/>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                    <div class="form-group">
                                        <label class="control-label col-xs-2">Correo Electronico: </label>
                                        <div class="col-xs-10">
                                        <input type="email" placeholder="@mail.com" class="form-control" required autofocus=""/>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="form-group">
                                        <label class="control-label col-xs-2">Telefono</label>
                                    <div class="col-xs-10">
                                        <input type="tel" name="Telephone" placeholder="Cel" class="form-control" required autofocus=""/>
                                    </div>
                                </div>
                            </div>

                                <div class="row">
                                    <div class="form-group">
                                        <label class="control-label col-xs-2">Estado Civil</label>
                                        <div class="col-xs-7">
                                        <select id="lstLista">
                                            <option value="Casado">Casado</option>
                                            <option value="divorsiado">Divorsiado</option>
                                            <option value="union">Union Libre</option>
                                            <option value="soltero">Soltero</option>
                                        </select>
                                        </div>
                                    </div>
                                </div>
                            <div class="row">
                                <div class="form-group">
                                        <label class="control-label col-xs-2">sexo</label>
                                    <div class="col-xs-7">
                                        <input type="radio" name="" value="H" id="rdoH"/>
                                        <label class="control-label">Hombre</label>
                                        <input type="radio" name="" value="M" id="rdoM"/>
                                        <label class="control-label ">Mujer</label>
                                    </div>
                                </div>
                            </div>



                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="form-group">
                                        <input type="submit" value="Registrar" class="btn btn-block btn-warning"/>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </div>



        );
    }
}

export default Formulario;