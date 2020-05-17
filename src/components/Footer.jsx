import React, { Component } from 'react';
//import logo from '../assets/img/logo.png';
//import { Link } from 'react-router-dom';
export class Footer extends Component {
  
render(){
    return(
        <footer className="sticky-footer bg-white">
        <div className="container my-auto">
          <div className="copyright text-center my-auto">
            <span>Copyright &copy; RiA Films!</span>
          </div>
        </div>
      </footer>

    )
}

}