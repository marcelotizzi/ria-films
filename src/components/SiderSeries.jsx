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

export class SilderSeries extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }
    componentWillMount() {
        this._fetchFilms("Sherlock");
        this._fetchFilms("Daredevil");
        this._fetchFilms("Spider-Man: The Animated Series");
        this._fetchFilms("Prison Break");
        this._fetchFilms("Breaking Bad");
        this._fetchFilms("Merlin");       
        this._fetchFilms("Suits");
        this._fetchFilms("El Marginal");
        this._fetchFilms("Between");
        this._fetchFilms("Kakegurui");
        this._fetchFilms("Titans");       

        

        
    }

    _fetchFilms(titulo) {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&t=${titulo}`)
            .then(res => res.json()
                .then(results => {
                    console.log(results)
                    this.setState({ data: this.state.data.concat(results) })
                    // this.setState({ data: results })
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