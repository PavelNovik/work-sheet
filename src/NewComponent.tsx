import React from 'react';

export const NewComponent = () => {
    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]
    return (
        <table>
            <thead>
            <tr>
                <th>Number</th>
                <th>Manufacturer</th>
                <th>Model</th>
            </tr>
            </thead>
            <tbody>
            {topCars.map((item, index) => {
                return (
                    <tr>
                        <td>{index + 1}</td>
                        <td>{item.manufacturer}</td>
                        <td>{item.model}</td>
                    </tr>
                )

            })}
            </tbody>

        </table>
    );
};

