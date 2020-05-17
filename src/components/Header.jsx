import React, { Component } from 'react';
//import logo from '../assets/img/logo.png';
//import { Link } from 'react-router-dom';
export class Header extends Component {
  
render(){
    return(
        <nav className="navbar navbar-expand navbar-light bg-white topbar static-top"  style={{ opacity: ".9" }}>
          <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
            <div className="input-group">
            <p className="lead text-gray-800">Bienvenidos!</p>
            </div>
          </form>
        </nav>


    )
}

}