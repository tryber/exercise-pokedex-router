import React from 'react';
import './style_sheets/pokemon.css';
import { Link } from 'react-router-dom';

class Pokemon extends React.Component {
  render() {
    const {name, type, averageWeight, image, id} = this.props.pokemon;
    return (
      <div className='pokemon' id={type.toLowerCase()}>
        <div>
          <p>{name}</p>
          <p>{type}</p>
          <p>
            Average weight: {`${averageWeight.value} ${averageWeight.measurementUnit}`}
          </p>
          <Link to={{
            pathname:`/pokemon/${id}`,
            state: { ...this.props.pokemon }
          }}>
            DETALHES
          </Link>
        </div>
        <img src={image} alt={`${name} sprite`} id='pokemon-gif' />
      </div>
    );
  }
}

export default Pokemon;