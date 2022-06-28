import React from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import Logo from "../img/logoHenry.png"
import "./styles/Nav.css";


export default function Nav({onSearch}) {
    return (
        <nav className="navbar navbar-dark bg-dark">
          <Link to='/'>
            <div className="d-flex">
              <img src={Logo} alt='logo' />
              <p className="text-white bg-dark m-2 ml-3">Henry - Weather App</p>
            </div>
          </Link>
          <Link to='/about'>
            <span>
              About
            </span>
          </Link>
          <SearchBar onSearch={onSearch}/>
        </nav>
    );
  };