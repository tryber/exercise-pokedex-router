import React from 'react';
import propTypes from 'prop-types';
import Image from './Image.js';
import Pokecard from './Pokecard.js';
import './Pokemon.css';
import { FaStar } from 'react-icons/fa';

class Pokemon extends React.Component {
  render() {
    const {name, type, averageWeight: weight, image, moreInfo} = this.props.pokemon;
    const { link, isFavorite } = this.props;
    const altText = `Pokemon ${name} image`;

    // Handle function received to favorite functionality
    const { handle } = this.props;


    return (   
      <div className='card'>
          <Pokecard name={name} type={type} weight={weight.value} unit={weight.measurementUnit} more={moreInfo} linkToDetails={link} />
          <Image src={image} alt={altText} />
          <div class="favorite-column">
            <FaStar type="icon" onClick={handle} className={isFavorite ? "favorite-icon checked" : "favorite-icon"} id={name} checked={isFavorite ? false : true} />
        </div>
      </div>
    );
  }
}

Pokemon.propTypes = {
  name: propTypes.string,
  type: propTypes.string,
  weight: propTypes.number,
  unit: propTypes.string,
  image: propTypes.string
}

export default Pokemon;