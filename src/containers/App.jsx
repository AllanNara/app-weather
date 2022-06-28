import React from "react";
import About from "../components/About";
import Cards from "../components/Cards";
import City from "../components/City";
import Nav from "../components/Nav";
import { Route, Routes } from "react-router-dom";
import "./App.css"

export default function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/city/:cityId" element={<City />} />
        <Route path="/" element={<Cards/>} />
      </Routes>
    </div>
  )
}