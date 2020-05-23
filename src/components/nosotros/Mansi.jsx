import React, { Component } from 'react';
import ironman from '../../assets/images/ironman.jpg';
import { Link } from 'react-router-dom';

export class Mansi extends Component {

    render() {

        return (

            <div className="col-md-4">
                <div className="card card_color">
                    <img className="card-img-top" src={ironman} alt="" />
                    <div className="card-body">
                        <h5 className="card-title">Joaquin Mansilla alias <b>Mansi!</b></h5>
                        <div className="card-text">
                        <b>    Le gusta el cine de superhéroes y anime, de preferencia</b><br />
                         Calladito y Tranquilo pero tiene varios trucos bajo la manga,
                         un tipo inofensivo pero peligroso, según testigos.
                        <br />
                            <b>Géneros Favoritos:</b> Anime, Super Héroes, Acción
                        <br />
                            <hr />
                            <b>Películas Favoritas:</b>
                            <li><Link to="/details/tt0137523" target="_blank">El Club de la pelea</Link></li>
                            <li><Link to="/details/tt0361862" target="_blank">El Maquinista</Link></li>
                            <li><Link to="/details/tt0371746" target="_blank">Iron Man</Link></li>
                            <li><Link to="/details/tt0848228" target="_blank">Avengers 1</Link></li>
                            <li><Link to="/details/tt0988045" target="_blank">Sherlock Holmes</Link></li>
                            <li><Link to="/details/tt0429493" target="_blank">Brigada A </Link></li>
                            <li><Link to="/details/tt1764651" target="_blank">Los Mercenarios (la saga)</Link></li>
                            <li><Link to="/details/tt1431045" target="_blank">Deadpool </Link></li>
                            <li><Link to="/details/tt0361748" target="_blank">Bastardos Sin Gloria </Link></li>                            
                                          
                            <br />
                            <b>Series Favoritas:</b>
                            <li><Link to="/details/tt3322312" target="_blank">Dardevil</Link></li>
                            <li><Link to="/details/tt2442560" target="_blank">Peaky Blinders</Link></li>
                            <li><Link to="/details/tt0814243" target="_blank">One Piece</Link></li>
                            <li><Link to="/details/tt0434665" target="_blank">Bleach</Link></li>
                            <li><Link to="/details/tt0412142" target="_blank">House</Link></li>
                            <li><Link to="/details/tt0903747" target="_blank">Breaking Bad</Link></li>
                            <li><Link to="/details/tt1119644" target="_blank">Fringe</Link></li>
                            <li><Link to="/details/tt0773262" target="_blank">Dexter</Link></li>
                            <li><Link to="/details/tt9162006" target="_blank">Boku No Hero Academia: Realidad Alterna</Link></li>
                        </div>
                    </div>
                </div>
            </div>


        )
    }

}