import React, { Component } from 'react'
import Pokemon from './Pokemon';
import Data from './data'

export default class PokemonDetail extends Component {
  constructor() {
    super()

    this.findPokemon = this.findPokemon.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      arrayFavs: [],
    }
  }

  findPokemon() {
      const { pokeId } = this.props.match.params
      return Data.find((p) => p.id === parseInt(pokeId))
  }

  handleChange({ target }) {
    const { name } = this.findPokemon();

    this.setState({})

    if (target.checked) {
      localStorage.setItem(name, 'favoritado')
    } else {
      localStorage.setItem(name, '')
    }
  }

  render() {
      const { name, summary, foundAt } = this.findPokemon();
      const isFav = localStorage.getItem(name)
    return (
      <div>
        <h2>{`${name} Details`}</h2>
        <div className="pokedex">
          <Pokemon pokemon={this.findPokemon()} showDetailsLink={false}/>
        </div>
        <h3>Summary</h3>
        <p>{ summary }</p>
        <h3>{`Game Locations of ${name}`}</h3>
        <div className="pokemon-habitat">
        {foundAt.map(({ location, map }) => (
            <div key={location}>
              <img src={map} alt={`${name} location`} />
              <p>
                <em>{location}</em>
              </p>
            </div>
          ))}
        </div>
        Pokémon Favoritado?
        <input
        type="checkbox"
        checked={isFav === 'favoritado' ? true : false}
        onChange={this.handleChange}
        />
      </div>
    )
  }
}
