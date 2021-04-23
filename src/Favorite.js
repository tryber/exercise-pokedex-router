import React, { Component } from 'react';
import Pokemon from './Pokemon';

class Favorite extends Component {
  render() {
    const { pokemons } = this.props;
    const listFavorited = pokemons.filter(({ favorited }) => favorited);
    return listFavorited.map((poke, index) => <Pokemon key={index} pokemon={poke}></Pokemon>);
  }
}

export default Favorite;
