import React, { Component } from 'react';
import turbo from '../../assets/images/turboman.jpg';
import { Link } from 'react-router-dom';

export class Tabarez extends Component {

    render() {

        return (
           
            <div className="col-md-4">
            <div className="card card_color">
                <img className="card-img-top" src={turbo} alt=""/>
                <div className="card-body">
                    <h5 className="card-title">Agustin Tabarez alias <b>Turbo Man!</b></h5>
                    <div className="card-text">
                     <b>   Le gusta el cine, nada como una buena peli!!</b>
                        <br/>
                
                        También se lo conoce como "El loco Turbina" o "Turbillo".
                        Estos apodos se deben a que se hacía pasar por mecánico y afanaba
                        radiadores de autos en Malvin Norte para revenderlos posteriormente.<br/>
                     
                        <b>Géneros Favoritos:</b> Accion de Preferencia!
                        <br />
                 <hr/>
                        <b>Películas Favaritas:</b>
                        <li><Link to="/details/tt0116705" target="_blank">Turbo Man</Link></li>
                        <li><Link to="/details/tt1080016" target="_blank">La Era del Hielo</Link></li>
                        <li><Link to="/details/tt0232500" target="_blank">Rapidos y Furiosos (Toreto Papá!!)</Link></li>
                        <li><Link to="/details/tt1375670" target="_blank">Son Como Niños</Link></li>                       

                        
                        <br />
                        <b>Series Favoritas:</b>
                        <li><Link to="/details/tt2085059" target="_blank">Back Mirror</Link></li>
                        <li><Link to="/details/tt0108778" target="_blank">Friends</Link></li>
                        </div>
                </div>
            </div>
        </div>


        )
    }

}