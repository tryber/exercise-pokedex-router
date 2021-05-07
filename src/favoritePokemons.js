import React, { Component } from 'react';
import Data from './data';
import Pokemon from './Pokemon'

export default class favoritePokemons extends Component {
  constructor() {
    super()

    this.loadFavs = this.loadFavs.bind(this);
  }

  loadFavs() {
   const arr = []; 

   Data.forEach((pokemon) => {
     if (localStorage.getItem(pokemon.name) === 'favoritado') {
      arr.push(pokemon);
     }
   });
   return arr.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)
  }
  
  render() {
    return (
      <div>
        <h2>
          <div className="pokedexList">
            {this.loadFavs()}
          </div>
        </h2>
      </div>
    )
  }
}
