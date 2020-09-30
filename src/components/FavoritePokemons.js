import React from 'react';
import Pokedex from './Pokedex';

class FavoritePokemons extends React.Component {

  filterFavoritePokemons(favoritePokemons, pokemonList) {
    const filteredPokemons = [];
    
    favoritePokemons.forEach(favoriteId => {
     const find = pokemonList.find(pokemon => pokemon.id == favoriteId);
     if (find !== undefined) {
       filteredPokemons.push(find)
     }
   })

    return filteredPokemons
  }

  render() {
    const { favoritePokemons, pokemonList } = this.props;

    const filteredPokemons = this.filterFavoritePokemons(favoritePokemons, pokemonList)

    return(
      <main>
        <h2>Your Favorite Pokemons:</h2>
        {filteredPokemons.length === 0 ? <h3>You don't have favorite Pokemons</h3> : <Pokedex pokemons={filteredPokemons} favoritePokemons={favoritePokemons} />}
      </main>
    )
  }
}

export default FavoritePokemons;
