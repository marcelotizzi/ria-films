import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFilm,faCalendar } from '@fortawesome/free-solid-svg-icons';
import {  Link } from 'react-router-dom';

export class Buscador extends Component {

    render() {
        const pelis=this.props.peliculas.Search;
        console.log(pelis)
        return (
            <div className="row">
                {pelis.map((i, index) => (
                    <div className="col-md-3" key={index}>
                           <Link to={`/details/${i.imdbID}`} style={{ color: 'white', textDecoration:'none' }}>
                        <center>
                            <img src={i.Poster} className="img-fluid img_peli" alt="" />
                            <h4>{i.Title}</h4>
                            <FontAwesomeIcon icon={faCalendar} /> {i.Year}
                            <br/>
                            <FontAwesomeIcon icon={faFilm} />   {i.Type}<br />
                        </center>
                        <br/>      <br/>
                        </Link>
                    </div>
          
                ))
                }
            </div>


        )
    }

}