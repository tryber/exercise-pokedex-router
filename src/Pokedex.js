import React from 'react';
import PropTypes from 'prop-types';
import Pokemon from './Pokemon.js';
import Button from './Button.js';
import pokemons from './data.js';
import './Pokedex.css';

class Pokedex extends React.Component {
  constructor() {
    super();
    this.changePokemon = this.changePokemon.bind(this);
    this.filterPokemon = this.filterPokemon.bind(this);
    this.state = {
      pokemonIndex: 0,
      pokemonsFiltered: pokemons,
    }
  }

  filterPokemon({ target }) {
    const type = target.value;
    this.setState(() => {
      if (type === 'All') {
        return ({pokemonIndex:0, pokemonsFiltered: pokemons})
      }
      return ({pokemonIndex:0, pokemonsFiltered: pokemons.filter(pokemon => pokemon.type === type)});
    });
  }

  changePokemon() {
    this.setState((actualState) => {
      if (actualState.pokemonIndex < this.state.pokemonsFiltered.length - 1) {
        return ({pokemonIndex: actualState.pokemonIndex + 1})
      } else {
        return ({pokemonIndex: 0})
      }
    });
  }

  render() {
    const typeList = ['Fire', 'Psychic', 'Electric', 'Bug', 'Poison', 'Normal', 'Dragon', 'All'];
    
    const pokemonInScreen = this.state.pokemonsFiltered[this.state.pokemonIndex];
    // Handle function received to favorite functionality
    const { handle } = this.props;

    // Verify if the pokemon is favorite to check or not the checkbox
    const check = this.props.favorites.includes(pokemonInScreen.name);

    return (
      <div className='pokedex'>
        <Pokemon pokemon={pokemonInScreen} link='true' isFavorite={check} handle={handle} />
        <div className='pokedex-buttons-container'>
          { typeList.sort().map((type, index) => <Button key={index} disabled='false' handle={this.filterPokemon} pokemonType={type} label={type}/> )}
        </div>
        <div className='next-button'>
          <Button handle={this.changePokemon} disabled={this.state.pokemonsFiltered.length === 1 ? true : false} label='Next'/>
        </div>
      </div>
    );
  }
}

Pokedex.propTypes = {
  pokemons:PropTypes.exact({
    id: PropTypes.number,
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.exact({
      value: PropTypes.number,
      measurementUnit: PropTypes.string
    }),
    image: PropTypes.string,
    moreInfo: PropTypes.string
  })
}

export default Pokedex;