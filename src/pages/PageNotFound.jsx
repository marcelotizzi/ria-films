import React, { Component } from 'react';
//import logo from '../assets/img/logo.png';
import { Link } from 'react-router-dom';
import loco from '../assets/images/404homero.gif';
export class PageNotFound extends Component {

    render() {
        return (
            <div class="container-fluid">

                <div class="text-center">
                    <div class="error mx-auto" data-text="404">404</div>
                    <p class="lead mb-5" style={{ color: "white" }}>Page Not Found</p>
                    <img src={loco} alt=""/>
                    <br/>     <br/>
                    <div className="col-md-4 offset-md-4">
                        <Link to="/" style={{ textDecoration:"none" }}>
                            <button type="button" className="btn btn-secondary btn-lg btn-block">
                                &larr;  Back to Home
                            </button>
                        </Link>
                    </div>

                </div>
            </div>

        )
    }

}