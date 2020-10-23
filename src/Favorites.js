import React from 'react';
import PropTypes from 'prop-types';
import Pokemon from './Pokemon.js';
import pokemons from './data.js';
import './Favorites.css';

class Favorites extends React.Component {
  render() {
    // Handle function received to favorite functionality
    const { handle } = this.props;

    const favoritesPokemonsNames = this.props.favorites;
    const favoritePokemons = favoritesPokemonsNames.map(pokemonName => pokemons.find(pokemon => pokemon.name === pokemonName));
    return (
        <div className="favorites-container">
          {(favoritePokemons.length < 1) ? <h1>No favorite pokemon yet.</h1> : favoritePokemons.map((pokemonObj, index) => <Pokemon className="card" key={index} pokemon={pokemonObj} link={true} isFavorite={true} handle={handle} />)}
        </div>
    );
  }
}

export default Favorites;