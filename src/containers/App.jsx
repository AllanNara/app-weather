import React, { useState } from "react";
import About from "../components/About";
import Cards from "../components/Cards";
import City from "../components/City";
import Nav from "../components/Nav";
import { Route, Routes } from "react-router-dom";
import "./App.css";

const apiKey = '4ae2636d8dfbdc3044bede63951a019b';

export default function App() {
  const [cities, setCities] = useState([]);

  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  };

  function onSearch(ciudad) {
    //Llamado a la API del clima
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        let found = cities.find(c => c.id === recurso.id);
        if(found !== undefined) {
          alert("Ya existe esta ciudad");
          return
        }
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }
  function onFilter(cityId) {
    let city = cities.filter(c => c.id === parseInt(cityId));
    if(city.length > 0) {
        return city[0];
    } else {
        return null;
    }
  }

  return (
    <div>
      <Nav onSearch={onSearch} />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/city/:cityId" element={({match}) => <City city={onFilter(match.params.cityId)} />} />
        <Route path="/" element={<Cards cities={cities} onClose={onClose} />} />
      </Routes>
    </div>
  )
}