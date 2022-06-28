import React, { useState } from "react";

export default function SearchBar({onSearch}) {
    const [ciudad, setCiudad] = useState('')
  
    return (
      <form 
      onSubmit={e => {
        e.preventDefault();
        onSearch(ciudad);
        setCiudad('');
      }}
      className="form-inline "
      >
        <input
          type="text"
          placeholder="Ciudad..."
          class="form-control mr-sm-2"
          value={ciudad}
          onChange={e => setCiudad(e.target.value)}
        />
        <input
         type="submit" 
         value="Agregar" 
         className='btn btn-outline-success' 
        />
      </form>
    );
  }