import React, { Component } from 'react';
import styled from 'styled-components';

export default class NavBar extends Component {
  render() {
    return (
    <div>
         <nav className="navbar navbar-dark bg-dark fixed-top">
          <a 
          href= ""
          class= "navbar-brand">Pokesearch</a
           >        
          <form className="form-inline">
             <input className="form-control mr-sm-2" type="search" placeholder="Procurar Pokemons" aria-label="Search"/>
             <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Procurar</button>
         </form>
        </nav>
    </div>
    );
  }
}

