import React, { Component } from 'react';
import Pokemon from './Pokemon';
import Location from './Location';
import { Redirect } from 'react-router-dom';
import './pokelist.css';

class PokemonDetail extends Component {
  constructor() {
    super();
    this.state = {
      favorited: false,
    };
    this.handle = this.handle.bind(this);
  }

  handle({ target: { checked } }) {
    this.setState({ favorited: checked });
    const { id } = this.props.match.params;
    const { pokemons, setFavorited } = this.props;
    const newPokemons = pokemons.map((poke) => {
      if (poke.id === Number(id)) {
        poke.favorited = checked;
      }
      return poke;
    });
    setFavorited(newPokemons);
  }

  render() {
    const { id } = this.props.match.params;
    const { pokemons } = this.props;
    const pokemon = pokemons.find((poke) => poke.id === Number(id));
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
        <label>
          Add favorited <input type="checkbox" onChange={this.handle}></input>
        </label>
      </div>
    );
  }
}

export default PokemonDetail;
