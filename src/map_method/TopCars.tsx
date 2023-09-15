import React from 'react';

const topCars = [
    {manufacturer: 'BMW', model: 'm5cs'},
    {manufacturer: 'Mercedes', model: 'e63s'},
    {manufacturer: 'Audi', model: 'rs6'}
]

type TopCarsPropsType = {
    table: Array<CarsType>

}
type CarsType = {
    manufacturer: string
    model: string
}

export const TopCars = (props: TopCarsPropsType) => {
   /* return (
        <ul>
            {props.table.map(( callback, index) => {

                    return (
                        <li key={index}>
                            <span>{callback.manufacturer}</span>
                            <span> model: {callback.model}</span>
                        </li>
                    )
                }
            )}


        </ul>
    );*/
    return (
        <table>

            <tr>
                <th>manufacturer</th>
                <th>model</th>
            </tr>
            {props.table.map(( callback, index) => {

                    return (<tr>
                        <td key={index}> {callback.manufacturer}</td>

                        <td >{callback.model}</td>
                        </tr>
                )

                }
            )}


        </table>


    )

}