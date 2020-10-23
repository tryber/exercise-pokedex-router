import React from 'react';
import { Link } from 'react-router-dom';
import './Pokecard.css';

class Pokecard extends React.Component {
  render() {
    const {name, type, weight, unit, more, linkToDetails} = this.props;
    if (linkToDetails === 'false') {
      return (
        <div className='pokemon-data'>
          <h1>{name}</h1>
          <p>Type: {type}</p>
          <p>Average weight: {weight} {unit}</p>
        </div>
      ); 
    }
    return (
      <div className='pokemon-data'>
        <h1>{name}</h1>
        <p>Type: {type}</p>
        <p>Average weight: {weight} {unit}</p>
        <Link to={`/pokemons/:${name}`}>See more details about {name}</Link>
      </div>
    );
  }
}

export default Pokecard;