import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import { faStar } from '@fortawesome/free-solid-svg-icons';
import Slider from "react-slick";
const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
};
const API_KEY = "cd015ad1"

export class SilderFilms extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }
    componentWillMount() {
        this._fetchFilms("The Dark Knight");
        this._fetchFilms("shutter island");
        this._fetchFilms("fractured");
        this._fetchFilms("Avengers: Endgame");
        this._fetchFilms("Agent Cody Banks");
        this._fetchFilms("black hawk down");
        this._fetchFilms("Yes Man");
        this._fetchFilms("gladiator");
        this._fetchFilms("catch Me If You Can");
        this._fetchFilms("Click");
        this._fetchFilms("Avengers: Infinity War");
        this._fetchFilms("21 Jump Street");
        this._fetchFilms("Limitless");
        this._fetchFilms("Big Fat Liar");
        this._fetchFilms("Liar Liar");
        this._fetchFilms("War Dogs");
        this._fetchFilms("Bruce Almighty");
        this._fetchFilms("Arq");
        this._fetchFilms("Go Karts");
        this._fetchFilms("Jadotville");
        this._fetchFilms("The Bar");
        

    }

    _fetchFilms(titulo) {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&t=${titulo}`)
            .then(res => res.json()
                .then(results => {
                    console.log(results)
                    this.setState({ data: this.state.data.concat(results) })
                }
                )
            )
    }

    render() {


        return (

            <Slider {...settings}>



                {this.state.data.map((i, index) => (

                    <div key={index} className="col-md-10">
                           <Link to={`/details/${i.imdbID}`} style={{ color: 'white', textDecoration:'none' }}>

                        <center>
                            <img src={i.Poster} className="img-fluid img_peli" alt="" />
                            <h3>{i.Title}</h3>
                            <FontAwesomeIcon icon={faStar}/>  {i.imdbRating}/10
                        </center>
                        </Link>
                     
                    </div>
                ))}

            </Slider>

        )
    }

}