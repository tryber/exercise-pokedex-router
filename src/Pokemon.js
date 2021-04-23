import React from 'react';
import './pokemon.css';
import { Link } from 'react-router-dom';
import favoriteImg from './favorite.png';

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image, id, favorited = false } = this.props.pokemon;
    const link = `/pokemons/${id}`;
    const isFavorited = favorited ? <img src={favoriteImg} alt={name}width="20px" /> : false;

    return (
      <div className="pokemon">
        <div>
          {isFavorited}
          <p>{name}</p>
          <p>{type}</p>
          <p>Average weight: {`${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
          <Link to={link}>More Info</Link>
        </div>
        <img src={image} alt={`${name} sprite`} />
      </div>
    );
  }
}

export default Pokemon;
