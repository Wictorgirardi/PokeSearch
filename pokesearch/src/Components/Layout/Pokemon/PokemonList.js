import React, { Component } from 'react'
import PokemonCard from './PokemonCard';
import axios from 'axios';

export default class  extends Component {

    state = {
        url: 'https://pokeapi.co/api/v2/pokemon/',
        pokemon: null 
    };

    async componentDidMount(){
        const res = await axios.get(this.state.url);
        this.setState({ pokemon: res.data['results']});

    };

  render() {
    return (
      <div>
        {this.state.pokemon ? (
            <div className= "row"> 
            {this.state.pokemon.map(pokemon => (
            <PokemonCard/>
        ))}
    </div>
    ) : (
    <h1>Carregando</h1>
    )}
    </div>
    );
  }
}

