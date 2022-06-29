import React from "react";
import { useParams } from "react-router-dom";

export default function City({cities}) {
    const { cityId } = useParams();

    function onFilter(cityId) {
        let city = cities.find((c) => c.id === parseInt(cityId));
        return city;
    }
    
    const city = onFilter(cityId)
    return (
        <>
        {city ?
        <div className="ciudad">
            <div className="container">
                <h2>{city.name}</h2>
                <div className="info">
                    <div>Temperatura: {city.temp} ºC</div>
                    <div>Clima: {city.weather}</div>
                    <div>Viento: {city.wind} km/h</div>
                    <div>Cantidad de nubes: {city.clouds}</div>
                    <div>Latitud: {city.latitud}º</div>
                    <div>Longitud: {city.longitud}º</div>
                </div>
            </div>
        </div> 
        : <h4>Esta ciudad no se encuentra en la lista</h4>
        }
        </>
    ) 
}