import React, { Component } from 'react';
//import logo from '../assets/img/logo.png';
//import { Link } from 'react-router-dom';
export class TablaReferenciaSeries extends Component {

    render() {
        return (
            <div>
                <h3>Referencias de Calificación Series </h3>
                <table className="col-md-10 offset-md-1 table table-sm" style={{ color:"white" }}>
                    <thead>
                        <tr>
                            <th scope="col">Identificador	</th>
                            <th scope="col">Recomendación</th>
                            <th scope="col" style={{width:  "50%"}}>Definición</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr key={1}>
                            <th scope="row"> <button type="button" className="btn btn-success">
                            TV-Y  </button></th>
                            <td><b>Público preinfantil: niños menores de 6 años</b></td>
                            <td>Todas las edades admitidas. 
                            Ya sea animado o de acción en vivo, los temas y elementos en este programa están diseñados específicamente para un público infantil, incluyendo niños de 6 y menores. Con estos programas no se esperaba asustar a los niños más pequeños</td>
                        </tr>
                        <tr key={2}>
                            <th scope="row"><button type="button" className="btn btn-success">
                            TV-Y7  </button></th>
                            <td><b>Público infantil: desde 7 años</b></td>
                            <td>Estos programas pueden o no ser apropiados para algunos niños menores de 7 años. Esta clasificación puede incluir humor crudo, sugerente, violencia de fantasía leve, o contenido considerado controversial para los niños menores de siete años</td>
                        </tr>
                        <tr key={3}>
                            <th scope="row"><button type="button" className="btn btn-success">  	
                            TV-Y7-FV  </button></th>
                            <td><b>Público infantil con violencia ficticia, de fantasía ó emociones fuertes: desde 7 años</b></td>
                            <td>A diferencia del símbolo Y7, el programa contiene violencia ficticia/de fantasía/emociones fuertes, lejos del plano educativo se le asigna como TV-Y7-FV</td>
                        </tr>
                         <tr key={4}>
                            <th scope="row"><button type="button" className="btn btn-success">
                            TV-G </button></th>
                            <td><b>Público general (no requiere la compañía de algún familiar)</b></td>
                            <td>Aunque esta clasificación no indica un programa diseñado específicamente para los niños, la mayoría de los padres pueden dejar que los niños más jóvenes vean este programa sin supervisión. Contiene poca o ninguna violencia, nada de lenguaje fuerte y poco o ningún diálogo o situaciones sexuales. </td>
                        </tr> 
                        <tr key={5}>
                            <th scope="row"><button type="button" className="btn btn-success">
                            TV-PG </button></th>
                            <td><b>Guía paterna: Supervisión paternal</b></td>
                            <td>Esta calificación significa que el programa puede ser inadecuado para niños sin la guía de un padre. Muchos padres si lo desean, pueden verlo con sus hijos más jóvenes. Los programas de concursos y la mayoría de los reality shows son clasificados como TV-PG por sus diálogos sugestivos, humor sugerente, y / o lenguaje grosero.
                                <br/>        <br/>
                                Esta clasificación puede contener una o más de las siguientes siglas:

<li>D para algunos diálogos sugestivos.</li>
<li>L para lenguaje vulgar ocasional.</li>
<li>S para algunos contenidos sexuales.</li>
<li>V para violencia moderada.</li>
                                
                                
                                 </td>
                        </tr>
                        <tr key={6}>
                            <th scope="row"><button type="button" className="btn btn-success">
                            TV-14 </button></th>
                            <td><b> Mayores de 14 años: Se requiere enfáticamente la compañía de los padres</b> </td>
                            <td>Los padres se les insiste a poner mayor cuidado en el seguimiento de este programa y se les advierte contra los niños/jóvenes menores de 14 años dejando que lo vean sin supervisión ó que los padres enfáticos los supervisen.
<br/>
<li>D para diálogos intensamente sugestivos.</li>
<li>L para lenguaje vulgar fuerte.</li>
<li>S para contenidos sexuales.</li>
<li>V para violencia intensa.</li>
</td>
                        </tr>
                        <tr key={7}>
                            <th scope="row"><button type="button" className="btn btn-success">
                            TV-MA  </button></th>
                            <td><b> Mayores de 17 años</b> </td>
                            <td>Los padres se les insiste a poner mayor cuidado en el seguimiento de este programa y se les advierte contra los niños/jóvenes/adultos menores de 17 años dejando que lo vean sin supervisión ó, si es un documental, pueden acceder con ó sin supervisión.
<br/><br/>

Esta clasificación puede contener una o más de las siguientes siglas:

<li>L para lenguaje crudo e indecente.</li>
<li>S para contenidos sexuales fuertes.</li>
<li>V para violencia gráfica.</li>

</td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>


        )
    }

}