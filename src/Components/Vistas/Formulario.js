import React, {Component} from 'react';
import '../../Css/EstiloForm.css';



class Formulario extends Component {
    render() {
        return ( 
        
        <div className="container">
        <div className="row centered-form">
            <div className="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Formulario</h3>
                    </div>
                    <div className="panel-body">
                        <form>

                            <div className="row">
                                    <div className="form-group">
                                        <label className="control-label col-xs-2">Nombre:</label>
                                        <div className="col-xs-10">
                                        <input type="text" placeholder="Name" className="form-control"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                    <div className="form-group">
                                        <label className="control-label col-xs-2">Apellido: </label>
                                        <div className="col-xs-10">
                                        <input type="text" placeholder="Last Name" className="form-control"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                    <div className="form-group">
                                        <label className="control-label col-xs-2">Correo Electronico: </label>
                                        <div className="col-xs-10">
                                        <input type="email" placeholder="@mail.com" className="form-control" required autofocus=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group">
                                        <label className="control-label col-xs-2">Telefono</label>
                                    <div className="col-xs-10">
                                        <input type="tel" name="Telephone" placeholder="Cel" className="form-control" required autofocus=""/>
                                    </div>
                                </div>
                            </div>

                                <div className="row">
                                    <div className="form-group">
                                        <label className="control-label col-xs-2">Estado Civil</label>
                                        <div className="col-xs-7">
                                        <select id="lstLista">
                                            <option value="Casado">Casado</option>
                                            <option value="divorsiado">Divorsiado</option>
                                            <option value="union">Union Libre</option>
                                            <option value="soltero">Soltero</option>
                                        </select>
                                        </div>
                                    </div>
                                </div>
                            <div className="row">
                                <div className="form-group">
                                        <label className="control-label col-xs-2">sexo</label>
                                    <div className="col-xs-7">
                                        <input type="radio" nameName="" value="H" id="rdoH"/>
                                        <label className="control-label">Hombre</label>
                                        <input type="radio" nameName="" value="M" id="rdoM"/>
                                        <label className="control-label ">Mujer</label>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="form-group">
                                <label className="control-label">POP</label>
                                    <div className=""></div>
                                    <input type="checkbox" name="musica" id="chkPOP"/>
                                    <label>Rock</label>
                                    <input type="checkbox" name="musica" id="chkRock"/>
                                    <label>Rock Indie</label>
                                    <input type="checkbox" name="musica" id="chkRockIndie" value="rockindie"/>
                                </div>
                             </div>

                            <div className="row">
                            <div className="form-group">
                                <label className="control-label col-xs-2">Ingresa un Texto</label>
                                <div className="col-xs-7">
                                <textarea id="txtaBlog" placeholder="Escribe tu comentario..." cols="40" rows="5" maxlength="" minlength=""></textarea>
                                </div>
                            </div>
                            </div>



                            <div className="row">
                                <div className="col-xs-12">
                                    <div className="form-group">
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