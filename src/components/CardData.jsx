import React, { Component } from 'react';
//import logo from '../assets/img/logo.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFilm } from '@fortawesome/free-solid-svg-icons';
export class CardData extends Component {
  
render(){
    return(
        <div className="col-md-5 offset-md-7">

        <div className="card-deck text-center">
            <div className="card mb-3 box-shadow">
            <h3><b><i>Nuestra Recomencacion Semanal</i></b></h3>
                <div className="card-body">
                    <h1><b>{this.props.title}</b></h1>
                    <ul className="list-unstyled mt-3 mb-4">
                        <li><b>Genero: </b>{this.props.Genre}</li>
                        <li><b>Año: </b>{this.props.Year}</li>
                        <li><b>Valoracion IMDB:</b> {this.props.imdbRating}/10</li>
                       
                        <li><b>Trama:</b> {this.props.Plot}</li>
                        <li> <Link to="/details/tt1677720"><button type="button" className="btn btn-success">
                        <FontAwesomeIcon icon={faFilm} />    Ver Más</button></Link>
                            </li>                     
                    </ul>

                </div>
            </div>
        </div>
    </div>

    )
}

}

