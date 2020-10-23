import React from 'react';
import PropTypes from 'prop-types';
import Pokemon from './Pokemon.js';
import pokemons from './data.js';
import './PokemonDetails.css';

class PokemonDetails extends React.Component {
  render() {
    // Get pokemon name received by URL | (Pikachu, PikaCHU, pikachu, :Pikachu, :piKachu) -> OK
    let { pokemonName } = this.props.match.params;
    pokemonName = pokemonName.includes(':') ? pokemonName.slice(1) : pokemonName;
    pokemonName = pokemonName[0].toUpperCase() + pokemonName.slice(1).toLowerCase();
    const thePokemon = pokemons.find(pokemon => pokemon.name === pokemonName);
    
    // Handle function received to favorite functionality
    const { handle } = this.props;
    
    // Verify if the pokemon is favorite to check or not the checkbox
    const check = this.props.favorites.includes(pokemonName);

    return (
      <div className="pokemon-details">
        <div className="details-section">
          <Pokemon pokemon={thePokemon} link="false" isFavorite={check} handle={handle} />
          <div className="favorite-check-container">
            <label for="favorite-check">
            <input name="favorite-check" id="favorite-check" type="checkbox" onClick={handle} value={pokemonName} checked={check} />
            Make {pokemonName} Favorite</label>
          </div>
        </div>
        <div className='details-section'>
          <div className='title'>
            <h1>Pokemon Summary</h1>
          </div>
          <div className='maps-container'>
            <p>{thePokemon.summary}</p>
          </div>
        </div>
        <div className='details-section'>
          <div className='title'>
            <h1>Where catch {pokemonName}?</h1>
          </div>
          <div className='maps-container'>
            {thePokemon.foundAt.map(eachLocation => <div><img src={eachLocation.map} /><p>{eachLocation.location}</p></div>)}
          </div>
        </div>
      </div>
    );
  }
}

export default PokemonDetails;