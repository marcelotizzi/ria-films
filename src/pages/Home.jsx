import React, { Component } from 'react';
import { MenuVertical } from '../components/MenuVertical';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import scooby from '../assets/images/scooby.png';
import click from '../assets/images/click.png';

import { SilderFilms } from '../components/SilderFilms';
import { CardData } from '../components/CardData';
import { SilderSeries } from '../components/SiderSeries';

const API_KEY = "cd015ad1"
const title_portada="ready player one";
export class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }
    componentWillMount() {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&t=${title_portada}`)
            .then(res => res.json()
                .then(results => {
                  //  console.log(results)
                    this.setState({ data: results })
                }
                )
            )
    }
    render() {

        return (
            <div id="wrapper">
                <MenuVertical  activo="index"/>

                <div id="content-wrapper" className="d-flex flex-column">
                    <Header />

                    <div id="content">
                        <div id="imgaenBack" >

                            <br />        <br />
                            <div className="container" style={{ opacity: ".9" }}>
                                <CardData title={this.state.data.Title}
                                    Genre={this.state.data.Genre}
                                    Year={this.state.data.Year}
                                    imdbRating={this.state.data.imdbRating}
                                    Plot={this.state.data.Plot}
                                    Rated={this.state.data.Rated}
                                />

                            </div>
                        </div>
                        <div className="col-md-12 buscador news-left-grid">
                            <div className="row">

                                <div className="col-md-7 offset-md-2">
                                    <br />     <br />
                                    <h2><b>Nuestras Mejores Recomencaciones<br /><i>Peliculas </i></b></h2>
                                <hr/>
                                </div>
                                <div className="col-md-2">
                                    <img src={scooby} className="img-fluid" alt="" />
                                </div>
                            </div>

                            <SilderFilms />
                            <br/> <br/>
                        </div>

                        <div className="col-md-12 buscador_1 news-left-grid">
                            <div className="row">

                                <div className="col-md-7 offset-md-2">
                                    <br />     <br />
                                    <h2><b>Nuestras Mejores Recomencaciones<br /><i>Series</i></b></h2>
                                    <hr/>
                                </div>
                                <div className="col-md-3">
                                    <img src={click} className="img-fluid" alt="" />
                                </div>
                            </div>

                            <SilderSeries />
                            <br/> <br/>
                        </div>

                    </div>
                    <Footer />
                </div>
            </div>


        )
    }

}