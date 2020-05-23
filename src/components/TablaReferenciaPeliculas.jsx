import React, { Component } from 'react';
//import logo from '../assets/img/logo.png';
//import { Link } from 'react-router-dom';
export class TablaReferenciaPeliculas extends Component {

    render() {
        return (
            <div>
                <h3>Referencias de Calificación Películas</h3>
                <table className="col-md-10 offset-md-1 table table-sm" style={{ color:"white" }}>
                    <thead>
                        <tr>
                            <th scope="col">Identificador</th>
                            <th scope="col">Edad Mínima</th>
                            <th scope="col">Recomendación</th>
                            <th scope="col" style={{width:  "50%"}}>Definición</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr key={1}>
                            <th scope="row"> <button type="button" className="btn btn-success">
                                G </button></th>
                            <td><b>Todas las edades</b></td>
                            <td>Todos los públicos</td>
                            <td>Todas las edades admitidas. 
                                No hay desnudos ni referencias sexuales, no hay drogas, alcohol 
                                y/o tabaco —estos dos últimos si pueden aparecer pero muy poco frecuente—,
                                 violencia mínima.</td>
                        </tr>
                        <tr key={2}>
                            <th scope="row"><button type="button" className="btn btn-success">
                                PG </button></th>
                            <td><b>En compañía, muchos mayores de 10 años lo están viendo</b></td>
                            <td>Guía paternal sugerida</td>
                            <td>Algún material puede no ser adecuado para niños. Se aconseja mayores de 10 años Generalmente se recomienda
                                 que los menores de 10 años deben ser acompañados de un mayor de 10 años. Puede haber violencia moderada,
                                  acción limitada, sangre, armas —poco uso—, imágenes algo intensas, humor crudo o leves 
                                  referencias de drogas y alcohol. No hay matanza muy violenta para exagerar.</td>
                        </tr>
                        <tr key={3}>
                            <th scope="row"><button type="button" className="btn btn-success">
                                PG-13 </button></th>
                            <td><b>En compañía nocturna, muchos mayores de 13 años lo están</b></td>
                            <td>Guía paternal estricta.</td>
                            <td>Algunos materiales pueden ser inapropiados para niños menores de 13 años.
                            Puede contener lenguaje moderado, lenguaje muy soez o semifuerte, algunos desnudos explícitos parciales, leve contenido de violencia, uso leve de armas, leve aparición de sangre, contenido leve de drogas e imágenes intensas. La mayoría de películas con esta clasificación son del género de acción,</td>
                        </tr>
                         <tr key={4}>
                            <th scope="row"><button type="button" className="btn btn-success">
                                R </button></th>
                            <td><b>En compañía estricta, muchos mayores de 17 años lo están viendo</b></td>
                            <td>Restringido</td>
                            <td>Menores de 17 años requieren de acompañamiento de padres o tutor adulto.
                                 Puede contener lenguaje fuerte, intensa énfasis sexual, desnudez explícita y fuerte,
                                  fuerte contenido de violencia, uso muy frecuente de armas, fuerte cantidad de sangre </td>
                        </tr> 
                        <tr key={5}>
                            <th scope="row"><button type="button" className="btn btn-success">
                                NC-17 </button></th>
                            <td><b>Sólo los mayores de 18 años</b></td>
                            <td>Prohibido para audiencia de 17 años y menos.</td>
                            <td>Esta película no es adecuada los menores de 18 años.<br/>
                                 Casi igual que la clasificación «R», pero lo único que cambia es que aquí hay violencia extrema, contenido sexual fuerte, extremo uso de armas, desnudez en largos períodos de tiempo y/o mucha sangre.</td>
                        </tr>
                        <tr key={6}>
                            <th scope="row"><button type="button" className="btn btn-success">
                                N/A </button></th>
                            <td><b>Desconocido</b> </td>
                            <td>Sin clasificar</td>
                            <td>Para la película que no se haya presentado para la calificación, se utiliza la etiqueta NR —No Calificado—
                                 aunque, "NR" no es una califacion oficial de la MPAA (Asociación Cinematográfica de Estados Unidos)</td>
                        </tr>
                    </tbody>
                </table>
            </div>


        )
    }

}