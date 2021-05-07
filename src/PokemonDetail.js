import React from 'react';
import pokemons from './data';
import './pokemonDetail.css';


class PokemonDetail extends React.Component {

  pokemonMap = (foundAt) => {
     return  (
       <div>
        {foundAt.map(({ map, location }) => (
          <div key={map}>
            <p>{location}</p>
            <img src={map} alt={location} />
          </div>
        ))}
        </div>
    )
  };

  showPokemonDetail = (pokemonId) => {
    const pokemonIs = pokemons.find((pokemon)=>(pokemon.id.toString() === pokemonId));
    const {name, type, averageWeight, image, summary, foundAt} = pokemonIs;
    return (
      <div className="pokemon">
        <div>
          <img src={image} alt={`${name} sprite`} />
          <p>{name}</p>
          <p>{type}</p>
          <p>
            Average weight: {`${averageWeight.value} ${averageWeight.measurementUnit}`}
          </p>          
          <p>
            Summary: {summary}
          </p>
          <p>
            Possible Locations:
            {this.pokemonMap(foundAt)}
          </p>
        </div>
        
      </div>
    );
  }
  render() {
    const { pokemonId } = this.props.match.params;
    console.log(this.props.match)
    return(
    <div>
      { this.showPokemonDetail(pokemonId) }
    </div>);
  }
}

export default PokemonDetail;