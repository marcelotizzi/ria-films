import React, { Component } from 'react';
import { MenuVertical } from '../components/MenuVertical';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faVideo,faTired } from '@fortawesome/free-solid-svg-icons';
import {Buscador} from '../components/Buscador';
const API_KEY = "cd015ad1"

export class Peliculas extends Component {
  constructor(props) {
    super(props)
    this.state = {
      peliculas:[],
      inputMovie:'',
      validacion:false,
      mensaje:"",
    }
  }

_handleChange = (e) => {
//  console.log(e.target.value)
    this.setState({ inputMovie: e.target.value })
}
  _handleSubmit = (e) => {
    e.preventDefault()
    const  inputMovie  = this.state.inputMovie
    //console.log(inputMovie)

    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
        .then(res => res.json()
            .then(results => {
              if(results.Response==="True"){
               this.setState({peliculas:results,validacion:true,mensaje:""})
              } else{
                this.setState({validacion:false,mensaje:"  Esa Pelicula/Serie no se encutra!"})

              }

            }
            )
        )
        
}
  render() {

    return (
      <div id="wrapper">
        <MenuVertical activo="peliculas"/>

        <div id="content-wrapper" className="d-flex flex-column">
          <Header />

          <div id="content" className="detail">
            <form className="col-md-4 offset-md-4" onSubmit={this._handleSubmit}>
              <div className="rotate-n-15">
                <FontAwesomeIcon icon={faVideo} size="lg" style={{ "color": "white" }} />
              </div>
              <h3>Ria Films! <br />Buscador de Peliculas y Series</h3>
              <br />
              <div className="input-group mb-3">
                <input type="text" className="form-control" onChange={this._handleChange}
                  placeholder="Buscador de Peliculas y Series" />
                <div className="input-group-append">
                  <button className="btn btn-primary">
                    <FontAwesomeIcon icon={faSearch} />
                  </button>
                </div>
              </div>

            </form>

          <div className="col-md-12">
          <b> {this.state.validacion===true ? "Buscando: "+this.state.inputMovie :"" }</b>
            <br/><br/>

            {this.state.mensaje!=="" ?   <div><FontAwesomeIcon icon={faTired} size="2x"/>
            {this.state.mensaje}  
             </div>
             
             :""}
            {this.state.validacion===true ?<Buscador peliculas={this.state.peliculas}/> :"" }
          
            </div>
         
          </div>

          <Footer />
        </div>
      </div>


    )
  }

}