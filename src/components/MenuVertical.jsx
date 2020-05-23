import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome,faFilm,faMask,faVideo } from '@fortawesome/free-solid-svg-icons';

export class MenuVertical extends Component {
  
render(){
    return(
        <ul className="navbar-nav  sidebar sidebar-dark accordion"
        id="accordionSidebar">
      <Link to="/" className="link-text">

         <div className="sidebar-brand d-flex align-items-center justify-content-center">

           <div className="sidebar-brand-icon rotate-n-15">
           <FontAwesomeIcon icon={faVideo} size="lg" style={{"color":"white"}}/>
           </div>
           <div className="sidebar-brand-text">
           RiA Films
           </div>
         </div>
         </Link>
   
         <hr className="sidebar-divider my-0" />
   
   <Link to="/" className="link-text">
   <li   className={(this.props.activo === "index") ? "nav-item menu-hover menu-hover marker" : "nav-item menu-hover"}>
             Inicio<br/>
         <FontAwesomeIcon icon={faHome} size="3x" style={{"color":"white"}}/>
         </li>
         </Link>


         <hr className="sidebar-divider"/>
   
     <Link to="/peliculas" className="link-text">
         <li   className={(this.props.activo === "peliculas") ? "nav-item menu-hover menu-hover marker" : "nav-item menu-hover"}>
         Películas y Series<br/>
         <FontAwesomeIcon icon={faFilm} size="2x" style={{"color":"white"}}/>
         </li>
         </Link>
  
         <hr className="sidebar-divider"/>
         <Link to="/nosotros" className="link-text">

         <li   className={(this.props.activo === "nosotros") ? "nav-item menu-hover menu-hover marker" : "nav-item menu-hover"}>
             Nosotros<br/>
         <FontAwesomeIcon icon={faMask} size="2x" style={{"color":"white"}}/>
         </li>
         </Link>
         <hr className="sidebar-divider"/>
   
       </ul>

    )
}

}