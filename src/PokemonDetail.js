import React, { Component } from 'react';
import Pokemon from './Pokemon';
import Location from './Location';
import { Redirect } from 'react-router-dom';
import './pokelist.css';

class PokemonDetail extends Component {
  render() {
    const { id } = this.props.match.params;
    const { pokemons } = this.props;
    const pokemon = pokemons.find((poke) => poke.id == id);
    console.log(pokemon);
    const { foundAt, summary } = pokemon || {};
    return !pokemon ? (
      <Redirect to="/" />
    ) : (
      <div className="pokedex">
        <Pokemon pokemon={pokemon}></Pokemon>
        <div className="sumary">
          <h3>Sumary</h3>
          <p>{summary}</p>
        </div>
        <Location foundAt={foundAt} />
      </div>
    );
  }
}

export default PokemonDetail;
