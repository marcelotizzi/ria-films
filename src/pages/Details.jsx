import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MenuVertical } from '../components/MenuVertical';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { DetalleFilm } from '../components/DetalleFilm';
const API_KEY = "cd015ad1"

export class Details extends Component {

    static propTypes={
        match:PropTypes.shape({
            params:PropTypes.object,
            isExact:PropTypes.bool,
            path:PropTypes.string,
            url:PropTypes.string
        })
    }
    constructor(props) {
        super(props)
        this.state = {
            movie: []
        }
    }
    _fetchMovies({id}){
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
        .then(res => res.json()
            .then(movie => {
                this.setState({movie:movie})
            //    console.log({movie})
            }
            )
        )
    }
    componentWillMount() {
        const {movieId}=this.props.match.params
        console.log(movieId)
        this._fetchMovies({id:movieId});
    }
     componentDidMount() {
        document.getElementById('wrapper').scrollIntoView();
    }

    _goBack(){
        window.history.back()
    }

    render() {

        return (
            <div id="wrapper">
                <MenuVertical />

                <div id="content-wrapper" className="d-flex flex-column">
                    <Header />
                            {
                        <DetalleFilm detalle={this.state.movie}/>
                     }
             
                    <Footer />
                </div>
            </div>


        )
    }

}