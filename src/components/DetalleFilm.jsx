import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faFilm } from '@fortawesome/free-solid-svg-icons';
import {  Link } from 'react-router-dom';
import {TablaReferenciaPeliculas} from './TablaReferenciaPeliculas';
import {TablaReferenciaSeries} from './TablaReferenciaSeries';

export class DetalleFilm extends Component {

    render() {
        return (
            <div id="content" className="detail">
                <div className="row">
                    <div className="col-md-4">

                        <center>
                            <img src={this.props.detalle.Poster} className="img-fluid img_peli" alt="" />
                            <h3>{this.props.detalle.Title}</h3>
                            <FontAwesomeIcon icon={faStar} />  {this.props.detalle.imdbRating}/10<br />
                            <FontAwesomeIcon icon={faFilm} />   {this.props.detalle.Type}<br />

                        </center>
                        <br/> <br/> <br/> <br/> <br/>
                        <div className="col-md-4 offset-md-4">
                        <Link to="/peliculas" className="button is-info" style={{textDecoration:'none' }}>
                            
                        <button type="button" className="btn btn-secondary btn-lg btn-block">
                            Volver
                            </button>
                            
                            </Link>
                            </div>

                    </div>


                    <div className="col-md-5 offset-md-2">

                        <div className="card-deck text-center">
                            <div className="card mb-3 box-shadow">

                                <div className="card-body cardNuevo">
                                    <h1><b>{this.props.detalle.Title}</b></h1>
                                    <ul className="list-unstyled mt-3 mb-4">
                                        <li><b>Género: </b>{this.props.detalle.Genre}</li>
                                        <li><b>Año: </b>{this.props.detalle.Year}</li>
                                        <li><b>Valoración IMDB:</b> {this.props.detalle.imdbRating}/10</li>
                                         {this.props.detalle.Type==="series" ?
                                          <li><b>Temporadas:</b> {this.props.detalle.totalSeasons}</li>

                                        :""}

                                        <li><b>Trama:</b> {this.props.detalle.Plot}</li><br />
                                        <li> <button type="button" className="btn btn-success">
                                            Calificación: {this.props.detalle.Rated}</button>
                                        </li>
                                    </ul>
                                    <hr />
                                    <h5>Más Detalles</h5>
                                    <ul className="list-unstyled mt-3 mb-4">
                                        <li><b>Duración:</b> {this.props.detalle.Runtime}</li>
                                        <li><b>Premios:</b> {this.props.detalle.Awards}</li>
                                        <li><b>País Origen: </b>{this.props.detalle.Country}</li>
                                        <li><b>Actores: </b>{this.props.detalle.Actors}</li>
                                        <br />
                                        <li><b>Director:</b> {this.props.detalle.Director}</li>

                                        <li><b>Producción:</b> {this.props.detalle.Production}</li>

                                        <li><b>Escritores:</b> {this.props.detalle.Writer}</li>

                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

<br/><br/><br/>
{this.props.detalle.Type==="series"?
<TablaReferenciaSeries/>
:
<TablaReferenciaPeliculas/>
}


<br/><br/><br/>

            </div>
        )
    }

}


