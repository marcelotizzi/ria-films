import React, { Component } from 'react';
import batman_1 from '../../assets/images/Batman_1.png';
import { Link } from 'react-router-dom';

export class Tizzi extends Component {

    render() {

        return (
           
            <div className="col-md-4">

            <div className="card card_color">
                <img className="card-img-top" src={batman_1} alt="" />
                <div className="card-body">
                    <h5 className="card-title">Marcelo Tizzi alias <b>El Intrepido!</b></h5>
                    <div className="card-text">
                       <b> Este sujeto es Amante del Cine!!!</b><br />
Algunas personas afirman conocerlo por "The Magic Codes", otros dicen que es el mismisimo Batman!<br />
<b>Generos Favoritos:</b> Accion,Ciencia Ficcion, Comedia, Thriller, Anime, Super Heroes
                        <br />
                        <hr/>
                        <b>Peliculas Favaritas:</b>

                        <li><Link to="/details/tt1068680" target="_blank">Si Señor!</Link></li>
                        <li><Link to="/details/tt1130884" target="_blank">Shutter Island</Link></li>
                        <li><Link to="/details/tt4332232" target="_blank">Fractured</Link></li>
                        <li><Link to="/details/tt0265086" target="_blank">La Caida del Alcon Negro</Link>  </li>
                        <li><Link to="/details/tt0172495" target="_blank">Gladiador</Link>  </li>
                        <li><Link to="/details/tt0172495" target="_blank">Batman (la saga de Christian Bale)</Link></li>
                        <li><Link to="/details/tt0075148" target="_blank">Rocky</Link></li>
                        <li><Link to="/details/tt1232829" target="_blank">21 Jump Street</Link></li>
                        <li><Link to="/details/tt1219289" target="_blank">Limitless</Link></li>
                        <li><Link to="/details/tt0264464" target="_blank">Atrapame Si Puedes</Link></li>
                        <li><Link to="/details/tt0358349" target="_blank">Agente Cody Bans 2</Link></li>

                        
                        <br />
                        <b>Series Favoritas:</b>
                        <li><Link to="/details/tt0455275" target="_blank">Prison Break</Link></li>
                        <li><Link to="/details/tt0877057" target="_blank">Death Note (El anime obvio)</Link></li>
                        <li><Link to="/details/tt1982229" target="_blank">City Hunter</Link></li>
                        <li><Link to="/details/tt1235099" target="_blank">Lie To Me</Link></li>
                        <li><Link to="/details/tt1196946" target="_blank">El Mentalista</Link></li>
                        <li><Link to="/details/tt1475582" target="_blank">Sherlock</Link></li>
                        <li><Link to="/details/tt0460681" target="_blank">Supernatural</Link></li>
                        <li><Link to="/details/tt0118480" target="_blank">Stargate SG-1</Link></li>

                        Los clasicos de su Infacia:
                        <li><Link to="/details/tt0088559" target="_blank">Macgyver</Link></li>
                        <li><Link to="/details/tt0106168" target="_blank">Wallker Ranger de Texas</Link></li>
                        <li><Link to="/details/tt0309125" target="_blank">Ace Lightning</Link></li>

                         <br/>
                         Y mas....
                        Y ya esta no escribo mas por que preciso paginar esto... jajajaja
                    </div>
               </div>
            </div>

        </div>


        )
    }

}