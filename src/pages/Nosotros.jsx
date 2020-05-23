import React, { Component } from 'react';
import { MenuVertical } from '../components/MenuVertical';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Tizzi } from '../components/nosotros/Tizzi';
import { Tabarez } from '../components/nosotros/Tabarez';
import { Mansi } from '../components/nosotros/Mansi';

export class Nosotros extends Component {

    render() {

        return (
            <div id="wrapper">
                <MenuVertical activo="nosotros" />

                <div id="content-wrapper" className="d-flex flex-column">
                    <Header />

                    <div id="content" className="detail">
                        <h3>¿Quiénes Somos?</h3><br />
                        <h5>Ellos son 3 colegas que se unieron con un único fin <br /> Desarrollar una super app
                        de Cine!!!
                        <br />
                        <b>Actuaciones estelares de...</b>
                        </h5>
                        <div className="row">
                            <Tizzi/>
                            <Tabarez/>
                            <Mansi/>

                        </div>
                        <br/>    <br/>    <br/>
                    </div>

                    <Footer />
                </div>
            </div>


        )
    }

}